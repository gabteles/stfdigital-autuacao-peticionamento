import {LoginPage} from "./shared/pages/login.page";
import {PrincipalPage}  from "./shared/pages/principal.page";
import {PeticionamentoPage} from "./pages/peticionamento.page";

import support = require('./shared/helpers/support');

describe("Peticionamento - Advogado", () => {

    let loginPage: LoginPage = new LoginPage();
    let principalPage: PrincipalPage = new PrincipalPage();
    let peticionamentoPage: PeticionamentoPage = new PeticionamentoPage();
    
    it ('Deveria logar no sistema', () => {
        loginPage.open();
        loginPage.login('peticionador', '123');
    });
    
    it ('Deveria acessar o novo processo de peticionamento', () => {
        principalPage.iniciarProcessoPorNome('Nova Petição');
    });
    
    it("Deveria preencher as informações básicas da petição", () => {
        peticionamentoPage.selecionarClassePeticionavel("HABEAS CORPUS");
        peticionamentoPage.selecionarPreferencias("Medida Liminar", "Réu Preso");
        peticionamentoPage.selecionarSigilo("Público");
    });

    it('Deveria preencher as informações das partes', () => {
        peticionamentoPage.informarEnvolvidoPoloAtivo("Fulano");
        peticionamentoPage.informarEnvolvidoPoloPassivo("Beltrano");

        peticionamentoPage.excluirEnvolvidoPoloAtivo(0);
        peticionamentoPage.excluirEnvolvidoPoloPassivo(0);

        peticionamentoPage.informarEnvolvidoPoloAtivo("Fulano");
        peticionamentoPage.informarEnvolvidoPoloPassivo("Beltrano");
    });

    it('Deveria fazer o upload dos anexos', () => {
        peticionamentoPage.uploadAnexo();
        peticionamentoPage.uploadAnexo();

        peticionamentoPage.aguardarUploadConcluido(0);
        peticionamentoPage.aguardarUploadConcluido(1);

        peticionamentoPage.selecionarTipoAnexo(0, "Petição inicial");
        peticionamentoPage.selecionarTipoAnexo(1, "Ato coator");

        peticionamentoPage.excluirAnexos();

        peticionamentoPage.uploadAnexo();
        peticionamentoPage.aguardarUploadConcluido(0);

        peticionamentoPage.selecionarTipoAnexo(0, "Petição inicial");
    });

    it('Deveria peticionar', () => {
        peticionamentoPage.peticionarAdvogado();

        expect(principalPage.exibiuMensagemSucesso()).toBeTruthy();
    });

    it('Deveria fazer o logout do sistema', () => {
		principalPage.logout();
	});
});