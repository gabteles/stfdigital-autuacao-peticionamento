package br.jus.stf.autuacao.peticionamento.domain.model.classe;

import java.util.List;

import br.jus.stf.core.shared.classe.ClasseId;
import br.jus.stf.core.shared.processo.TipoProcesso;

/**
 * @author Rafael Alencar
 * 
 * @since 1.0.0
 * @since 06.04.2016
 */
public interface ClassePeticionavelRepository {

	List<ClassePeticionavel> findAll();
	
	ClassePeticionavel findOne(ClasseId id);
	
	List<ClassePeticionavel> findByTipo(TipoProcesso tipo);

}
