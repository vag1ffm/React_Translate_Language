import './App.css';
import {I18nPropvider, LOCALES} from "./i18n/index,js";
import translate from "./i18n/translate";
import {FormattedMessage} from "react-intl";

function App() {
    let appLang = LOCALES.AZERBAIJANIAN

    return (

        <I18nPropvider locale={appLang}>
            <div className="App">
                {translate('hello')}
            </div>

            <FormattedMessage id={'Email'}>
                {(msg) => (  <input type="email" placeholder={msg}
                />)}
            </FormattedMessage>
        </I18nPropvider>

    );
}

export default App;
