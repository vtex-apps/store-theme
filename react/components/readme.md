*** COMPONENTES CUSTOM ***

- todas as features custom, estão atreladas a branch develop.
Todas as branchs devem ser criadas partindo da develop.
As demais branchs devem ser atualizadas com a develop.

***- Testar atualizações.***
Em caso de teste em todas as ramificações, testar na banch develop.
Usar ws: https://updateDevelop--corelabiz.myvtex.com

***- Vendor and name:***
Foi gerado novas configurações para o uso.
o vendor permanece vinculado a corebizlab.

name: tratado com store-tami e version 0.0.0

*** O uso da ws update reflete no teste, devido a mudança do name.***
Sempre que usar uma nova ws, será necessário consigurar as páginas
no /admin para corelabiz.store-tami@0.x:store.custom#nome-da-pagina

Se existir alguma página com erro de carregamento, verificar no admin a configuração
da pagina que deseja testar.
ex: corelabiz.store-tami@0.x:store.custom#nome-da-pagina.

 *** COMPONENTS###

*** ShelfCustom ***
***-componente responsável por renderizar a vitrine custom, localizada acima do footer -***
** Recursos utilizados para desenvlvimento do componente**
graphql - query 
useApolloClient - client react
SliderLayout - slider vtex";
FormattedCurrency - format vtex;
useDevice - detector responsive vtex

*** ButtonAddtoCart ***
***- componente responsável por add item ao carrinho, em vitrine custom -***
** Falta tratar as mutations e update no carrinho **