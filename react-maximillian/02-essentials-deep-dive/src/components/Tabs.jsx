export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonContainer = buttonsContainer; // this way when React searches for custom element will find it here.
  // N.B. the identifier should always start with upper case in order for this to work!!! e.g. ButtonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
