<script>
  document.querySelector('.btn').addEventListener('click', function() {
    // Obter os dados do formulário
    const nome = document.getElementById('floatingNome').value;
    const email = document.getElementById('floatingEmail').value;
    const telefone = document.getElementById('floatingTelefone').value;
    const preferencia = document.querySelector('select').value;
    const satisfacao = document.getElementById('nivel-satisfacao').value;
    const receberNovidades = document.getElementById('flexCheckDefault').checked ? "Sim" : "Não";

    // Criar a mensagem para o WhatsApp
    const mensagem = `*Formulário de Contato*\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nPreferência de Contato: ${preferencia}\nNível de Satisfação: ${satisfacao}\nReceber Novidades por Email: ${receberNovidades}`;

    // Substitua 'seunumerowhatsapp' pelo número do WhatsApp
    const numeroWhatsApp = '+5516982620915';

    // Codificar a mensagem para garantir que caracteres especiais sejam tratados corretamente
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    // Redirecionar para o WhatsApp
    window.open(url, '_blank');
  });
</script>
