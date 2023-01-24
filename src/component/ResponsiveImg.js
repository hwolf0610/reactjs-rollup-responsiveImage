import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Effect } from "@cloudinary/url-gen/actions/effect";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";

const cld = new Cloudinary({
  cloud: {
    cloudName: "ifeomaimoh",
  },
});

function ResponsiveImg(props) {
  let image = cld.image(props.imgSrc);
  image = image.setDeliveryType("fetch");
  image = image
    .effect(Effect.sepia())
    // .resize(fill().height(500).width(490))
    .roundCorners(byRadius().radius(40));
  // .rotate(byAngle(20));
  // .quality("q_40");

  // This gives the full delivery URL of the tranformations applied above.
  console.log({ url: image.toURL() });

  console.log("props.imgSrc: ", props.imgSrc);

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[responsive(200)]}
      //   plugins={[lazyload("0", 1), responsive(200), placeholder("blur")]}
    />
  );
}

export default ResponsiveImg;
