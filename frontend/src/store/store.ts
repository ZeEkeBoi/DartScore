import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TeamScoreState {
    team: string;
    scoreValue: number;
    scoreString: string;
    currScore: number;
    setTeam: (team: string) => void;
    setScore: (score: number) => void;
    setScoreString: (scoreString: string) => void;
    setCurrScore: (score: number) => void;
    clearScores: () => void;
}

export const useTeamScoreStore = create<TeamScoreState>()(
    persist(
        (set,get,api) => ({
            currScore: 0,
            setCurrScore: (score: number) => set({ currScore: score }),
            clearScores: () => set({ currScore: 0 }),
        }),
        {
            name: 'team-score-storage',
        }
    )
);
