import * as React from "react";
import { shallow } from "enzyme";

import { Hello } from "../Hello";

it("renders the heading", () => {
    const result = shallow(<Hello compiler="Typescript" framework="react"/>).contains(<h1>Hello from Typescript and react!</h1>);
    expect(result).toBeTruthy();
});