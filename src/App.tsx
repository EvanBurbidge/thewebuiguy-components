import Button from "@components/buttons/Button";
import ButtonOutline from "@components/buttons/ButtonOutline";

function onClickNoop() {
  console.log('nooooope');
}

function App() {
  return (
    <div className="w-full p-20">
      TheWebUiGuy components lib
      <h1>Button</h1>
      <Button id="button-test" onClick={onClickNoop}>
        button test
      </Button>
      <ButtonOutline id="button-test" onClick={onClickNoop}>
        button test
      </ButtonOutline>
    </div>
  );
}

export default App;
