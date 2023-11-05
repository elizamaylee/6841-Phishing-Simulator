import React from "react";
import { Button } from "../..";
import { toPng } from "html-to-image";

const PreviewForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  // const htmlToImageConvert = () => {
  //   toPng(elementRef.current, { cacheBust: false })
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = "my-image-name.png";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <form>
      <div className="body-container">
        <div className="content-container">
          <div className="heading-container">
            <h1>Preview form</h1>
            <div className="description">
              wowow amazing you're gonna phish them
            </div>
          </div>
          <Button
            text="Send preview email"
            textColour="white"
            backgroundColour="#25A7F1"
            onClick={() => {
              console.log("Preview!");
            }}
          ></Button>
          <div className="buttons-container">
            <Button
              text="Return"
              textColour="#525F7F"
              backgroundColour="#F7F8FC"
              onClick={props.onPrev}
            ></Button>
            <Button
              text="Continue"
              textColour="white"
              backgroundColour="#25A7F1"
              onClick={() => {
                console.log("Congrats!");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PreviewForm;
