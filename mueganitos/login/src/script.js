// Aviso: Não sou tão bom com JQuery, caso exista uma forma melhor de fazer essas funções, por favor, dê um fork e contribua com o parceiro aqui =D!!!

		// Função para adicionar a class ".esconder", responsável pela animação do avatar
		$(function(){
			$("#senha").focus(function(){
				$("#bracos").addClass("esconder");
				$(".olhos").addClass("fechar");
			});

			$("#senha").focusout(function(){
				$("#bracos").removeClass("esconder");
				$(".olhos").removeClass("fechar");
			});
		});

		// Função para adicionar a class ".validacao", responsável validação visual que é feita pelo CSS
		$(function(){$("input").focusout(function(){$("#form").addClass("validacao"); }); });