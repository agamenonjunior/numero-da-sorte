<script type="text/javascript">
        var sorteio;
        var mega = new Array();
        var lotofacil = new Array();
        var lotomania = new Array();
        var lotofacil = new Array();

        var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",];
        var agora = new Date();
        var i = 0;
        while(i<6){

            sorteio = Math.ceil(Math.random()*60);
            if(mega.indexOf(sorteio)< 0 ){
                mega.push(sorteio);
                i++;
            }                
        }

        while(i<20){

            sorteio = Math.ceil(Math.random()*50);
            if(lotomania.indexOf(sorteio)< 0 ){
            lotomania.push(sorteio);
            i++;
            }                
        }

        while(i<15){

            sorteio = Math.ceil(Math.random()*25);
            if(lotofacil.indexOf(sorteio)< 0 ){
                lotofacil.push(sorteio);
            i++;
            }                
        }


        function ordernar(a,b){
            return a-b;
        }
        mega.sort(ordernar);
        lotomania.sort(ordernar);
        lotofacil.sort(ordernar);
        console.log(mega);

        $("nav.mega a").delay(5000).text(mega).fadeIn;
        $("nav.loto a").delay(5000).text(lotomania).fadeIn;
        $("nav.facil a").delay(5000).text(lotomania).fadeIn;
        
        console.log(agora.getDate()+ " de " + meses[agora.getMonth()]);

    </script>
