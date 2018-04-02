import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Mounted SnapShot", () => {
    const mounted = mount(<TestComponent />);
    const wrapper = mounted.find(".nw-carouselexample").at(1);
    const buttonNxt = mounted.find(".nw-carouseltest-btnnext").at(1);
    const buttonPrev = mounted.find(".nw-carouseltest-btnprev").at(1);

    buttonNxt.simulate("click");

    wrapper.simulate("touchstart", {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
    });
    wrapper.simulate("touchmove", {
      touches: [
        {
          clientX: 51,
          clientY: 51,
        },
      ],
    });
    wrapper.simulate("touchend");
    wrapper.simulate("touchend");

    wrapper.simulate("touchstart", {
      touches: [
        {
          clientX: 51,
          clientY: 51,
        },
      ],
    });
    wrapper.simulate("touchmove", {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
    });
    wrapper.simulate("touchend");

    buttonPrev.simulate("click");
  });
});
