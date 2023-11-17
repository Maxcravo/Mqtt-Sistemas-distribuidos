# Mqtt-Sistemas-distribuidos
Projeto que visa a utilização da específicação MQTT, por meio da plataforma HiveMQ(broker), com o foco na construção de um aplicativo que utilize essa tecnologia. 

Entrega do projeto: 19/12/2023 - total de 1 mês e 5 dias

IDEIA DO PROJETO:
Aplicativo que utiliza protocolo MQTT para comunicar o estado da fruta, terão 3 tópicos: verde, madura e podre. Inicialmente, o usuário irá tirar uma foto da fruta e escolher entre um dos 3 tópicos que a fruta se encaixa, gerando informação da situação da fruta. O servidor vai receber a imagem enviada pelo usuário que tira foto, irá encaminhar a informação para o devido tópico. Assim que encaminhada, os ouvintes do tópico poderão visualizar essa informação, e o usuário que recolhe o respectivo tipo de fruta pode fazê-lo.

#### Serão os 3 tópicos: 
fruta verde
fruta madura
fruta podre

#### Serão 4 usuários: 
usuário que tira foto;
usuário que recolhe fruta verde;
usuário que recolhe fruta madura;
usuário que recolhe fruta podre;

Fluxo de Trabalho:
Configurar Ambiente Expo;
Configurar a biblioteca para a utilização do MQTT;
Realizar a comunicação com o servidor Cloud do HIveMq;
Desenvolver funcionalidades de para escrever no tópicos e visualizar os tópicos (maduro, verde e podre);
Funcionalidade para acessar a câmera direto do aplicativo;
Redirecionamento da mensagem para o servidor cloud;
Servidor Cloud direciona a mensagem para o tópico específico;
O tópico recebe a mensagem advinda do servidor;

![Fluxo de trabalho](fluxo.png)

Desejável:
Converter a imagem para base64 e enviá-la para o tópico também
Implementação de classificação de imagem no servidor para verificar o estado da fruta automaticamente.
