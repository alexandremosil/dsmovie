package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

// Registra como componente no sistema
@Service
public class MovieService {

	// Injeção de dependência
	@Autowired
	private MovieRepository repository;

	// Entre os controladores e a camada de serviço trafegam DTOs
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {

		// Retorna páginas
		Page<Movie> result = repository.findAll(pageable);

		// Converter Movie para MovieDTO
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x)); // função de alta ordem

		// Retorna o resultado
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get(); //get porque é Optional
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
}
