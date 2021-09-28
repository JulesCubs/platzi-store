import 'jsdom-global/register'; 
import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer"

describe('<Footer />', () => {
    //Aqui sale un error con mount() se instala npm install --save-dev --save-exact jsdom jsdom-global
    const footer = mount(<Footer />);
    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del titulo', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
    });
});