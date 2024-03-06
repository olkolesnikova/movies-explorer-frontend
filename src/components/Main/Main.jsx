import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ onSignOut }) {

    return (
        <>
            <main>
                <Promo onSignOut={onSignOut}/>
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio></Portfolio>
            </main></>

    )
}

export default Main;