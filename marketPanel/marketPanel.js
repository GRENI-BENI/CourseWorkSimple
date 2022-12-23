
class MarketPanel {

    static render(container) {

        fetch('marketPanel/marketPanel.html')
            .then(response=> response.text())
            .then(text=> container.innerHTML = text);



        setTimeout(function(){
container=document.getElementById("marketItemsContainer")
            for (let i = 1; i < 8; i++) {
                fetch('marketPanel/marketItems/item'+i+'.html')
                    .then(response=> response.text())
                    .then(text=> container.innerHTML=container.innerHTML+ text);
            }

        }, 500);
    }
}


export default MarketPanel;
