package br.jus.stf.autuacao.peticionamento.domain;

import java.util.List;
import java.util.Set;

import br.jus.stf.core.shared.identidade.PessoaId;

/**
 * @author Rafael Alencar
 * 
 * @since 1.0.0
 * @since 08.06.2016
 */
public interface EnvolvidoAdapter {
	
	public Set<PessoaId> pessoasEnvolvidas(List<String> nome);
	
}