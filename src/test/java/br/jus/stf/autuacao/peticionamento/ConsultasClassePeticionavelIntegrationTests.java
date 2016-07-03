package br.jus.stf.autuacao.peticionamento;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;

import  br.jus.stf.core.framework.testing.IntegrationTestsSupport;

/**
 * Teste de integração do serviço REST de classes peticionáveis.
 * 
 * @author anderson.araujo
 * @since 09/05/2016
 *
 */
@SpringApplicationConfiguration(ApplicationContextInitializer.class)
@WebIntegrationTest({"server.port:0", "eureka.client.enabled:false"})
public class ConsultasClassePeticionavelIntegrationTests extends IntegrationTestsSupport {
	
	@Test
	public void listarClassesPeticionaveis() throws Exception{
		mockMvc.perform(get("/api/classes-peticionaveis")).andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(26)));
	}

}