import React from 'react';

interface ToolbarProps {
  leftIcon: React.ReactNode; // Icon component for the left section
  rightIcon: React.ReactNode; // Icon component for the right section
  middleContent: React.ReactNode; // Content for the middle section
}

export const MainToolbar: React.FC<ToolbarProps> = ({
  leftIcon,
  rightIcon,
  middleContent,
}) => {
  return (
    <div style={styles.toolbar}>
      <div style={styles.leftSection}>{leftIcon}</div>
      <div style={styles.middleSection}>{middleContent}</div>
      <div style={styles.rightSection}>{rightIcon}</div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '35px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: '#ea8025',
  },
  leftSection: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    cursor: 'pointer',
  },
  middleSection: {
    flex: '1 1 auto',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#333',
  },
  rightSection: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    cursor: 'pointer',
  },
};
