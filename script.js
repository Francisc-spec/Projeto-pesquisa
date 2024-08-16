function searchWikipedia() {
    const query = document.getElementById('query').value;
    const ulr = `https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;

    fetch(url) // comentario: fetch(url): Envia uma rquisição HTTP para URL especificada e retorna uma Promise que se resolve com aresposta. 
       .then(response => response.json()) // comentario then(response => response.json()): Converte a resposta da API para JSON.
       .then(data => {    //then(data => {: Passa os dados JSON para a função de callback.
         const resultsDiv = document.getElementById('results'); // comentario: Obtém o elemento div com o ID results, onde os resultados serão exibidos. 
         resultsDiv.innerHTML = ''; // '';: Limpa qualquer conteúdo anterior dentro fo div de resultados.


         // comentario: data.query.search.forEach(result => {: Itera sobre cada resultado de pesquisa retornado pela API.
         // const resultDiv = document.createElement('div');: Cria um novo elemento div para cada resultado.
         // resultDiv.className = 'result'; Define a classe Css desse div como result. 

           data.query.search.forEach(result => {
             const resultDiv = document.createElement('div');
             resultDiv.className = 'result';

             // comentario: cosnt tittle = document.createElment('h3);: Cria um elemento h3 para o título do resultado.
           // title.innerText = result.title;: define o texto do título com o título do resultado de pesquisa retornado pela API. 

            const  title = document.createElement('h3');
            title.innerText = result.title; 

            const snippet = document.createElement('p'); 
            snippet.innerHTML = result.snippet + '...';

            const link = document.createElement('a');
            link.href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(result.title)}`;
            link.taget = '_blank';
            link.innerText = 'Leia mais'; 

            resultDiv.appendChild(title);
            resultDiv.appendChild(snippet);
            resultDiv.appendChild(link);

            resultsDiv.appendChild(resultDiv);
          });
       })
       .catch(error => console.error('Erro ao buscar na wikipedia:', error));
}