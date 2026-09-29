# PokePixel — sem gráfico

Desliga o desenho do mapa do PokePixel. **Alt+G** liga e desliga.

A interface continua na tela: janelas, botões, nomes dos personagens e dos NPCs. O que some é o
mapa desenhado — tiles, sprites e clima.

## Para que serve

Desenhar o mapa custa processador e placa de vídeo a cada quadro. Com várias janelas abertas ao
mesmo tempo, isso pesa. Desligado, o jogo **continua rodando normalmente**: medimos 60 quadros por
segundo de atualização com o mapa escondido. Só deixa de ser desenhado.

Em troca, você não vê os obstáculos nem por onde anda.

## O que ela acessa

O PokePixel roda em RPG Maker sobre PIXI. A extensão marca um único objeto da cena — o
`_spriteset`, que contém o mapa — como invisível. O PIXI então pula ele ao desenhar.

Ela guarda **uma coisa só**, no armazenamento da própria página: se você deixou ligado ou
desligado (`pp-sem-grafico`, valor `0` ou `1`).

Não lê sua conta, não lê o que você joga, não faz nenhuma chamada de rede e não envia nada para
lugar nenhum. São 50 linhas de JavaScript, sem nenhuma dependência — dá para ler inteiro em cinco
minutos, e é essa a intenção de o código estar aberto.

## Onde funciona

`pokepixel.nietore.com` e `poke.idleworld.online`. Em qualquer outro site ela não é carregada.

## Instalação

Pela loja de extensões do LionMultInstance, ou à mão: baixe o `.zip` da
[última release](../../releases/latest), descompacte numa pasta e aponte a extensão da janela para
ela.

Ao lado do `.zip` há um arquivo `.sha256`. Ele permite conferir que o pacote baixado é exatamente
o que foi publicado aqui.
