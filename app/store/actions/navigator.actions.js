export const NAVIGATE_PREVIOUS = 'NAVIGATE_PREVIOUS';
export const NAVIGATE_NEXT = 'NAVIGATE_NEXT';

export const navigateNext = () => {
  return {
    type: NAVIGATE_NEXT
  }
};

export const navigatePrevious = () => {
  return {
    type: NAVIGATE_PREVIOUS
  }
};
