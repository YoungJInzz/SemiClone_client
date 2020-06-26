window.addEventListener("load", () => {

    var log = console.log;

    const head = document.querySelector("head");
    var style = document.createElement("style");
    head.appendChild(style);
    style.type = "text/css";

    var keyframesFactory = (name, from, to) => {
        var textNode = '@keyframes '+name+'{from{left: '+from+'px} to{left:'+to+'px}}';
        style.appendChild(document.createTextNode(textNode));
    }

    const container = document.querySelector(".step1");
    
    let dragging = false;
    let mouseCursorXCoordinate = null;

    let targetBox = null;
    let nextSiblingBox = null;
    let previousSiblingBox = null;

    let targetBoxMargin = null;
    let nextSiblingBoxMargin = null;
    let previousSiblingBoxMargin = null;

    let activityRightBorder = null;
    let activityLeftBorder = null;

    container.onmousedown = (event) => {
        if(event.target.classList.contains("head")){
            targetBox = event.target.parentNode;
            nextSiblingBox = (targetBox.nextSibling != null)
                    ? targetBox.nextSibling
                    : targetBox.parentNode.firstChild;
            previousSiblingBox = (targetBox.previousSibling != null)
                    ? targetBox.previousSibling
                    : targetBox.parentNode.lastChild;
            
            targetBoxMargin = targetBox.offsetLeft;
            nextSiblingBoxMargin = targetBox.offsetLeft;
            previousSiblingBoxMargin = targetBox.offsetLeft;

            activityRightBorder = (targetBox.nextSibling != null)
                    ? nextSiblingBox.offsetLeft + nextSiblingBox.offsetWidth/2
                    : targetBoxMargin + targetBox.offsetWidth + targetBox.offsetWidth/2;
            activityLeftBorder = (targetBox.previousSibling != null)
                    ? previousSiblingBox.offsetLeft + previousSiblingBox.offsetWidth/2
                    : - targetBox.offsetWidth/2;

            mouseCursorXCoordinate= event.offsetX;

            targetBox.style.zIndex = "1";
            
            dragging = true;
        }
    }

    var isChange = true;
    var targetPageX = null;
    var targetOffsetX = null;
    container.onmousemove = (event) => {
        if(!dragging) return;
        
        nextSiblingBox = targetBox.nextSibling;
        previousSiblingBox = targetBox.previousSibling;
        
        nextSiblingBoxMargin = targetBox.offsetLeft;
        previousSiblingBoxMargin = targetBox.offsetLeft;

        activityRightBorder = (targetBox.nextSibling != null)
                ? nextSiblingBox.offsetLeft + nextSiblingBox.offsetWidth
                : null;
        activityLeftBorder = (targetBox.previousSibling != null)
                ? previousSiblingBox.offsetLeft
                : null;
        
        
        targetPageX = (event.target.className != "step1") ? event.pageX : targetPageX;
        targetOffsetX = (event.target.className != "step1") ? event.offsetX : targetOffsetX;
        const flexBoxXCoordinate = targetPageX - targetBoxMargin;

        const flexBoxStartPoint = targetPageX - targetOffsetX;
        const flexBoxEndPoint = targetPageX + targetBox.offsetWidth - targetOffsetX;
        
        targetBox.style.left = (flexBoxXCoordinate - mouseCursorXCoordinate) + "px";
        
        console.log(isChange);
        if(flexBoxStartPoint < activityLeftBorder && isChange && previousSiblingBox != null){
            isChange = false;

            /* animationFactory */
            keyframesFactory("move-next", 0, targetBox.offsetWidth);
            previousSiblingBox.style.animation = "move-next 0.2s";

            /* swap */
            previousSiblingBox.onanimationend = () => {
                if(previousSiblingBox == null) return;
                
                previousSiblingBox.style.animation = "";
                targetBox.insertAdjacentElement("afterend", previousSiblingBox);
                targetBoxMargin -= previousSiblingBox.offsetWidth;
                
            }
            isChange = true;
        }else if(flexBoxEndPoint > activityRightBorder && isChange && nextSiblingBox != null){
            isChange = false;
            
            /* animationFactory */
            keyframesFactory("move-previous", 0, -targetBox.offsetWidth);
            nextSiblingBox.style.animation = "move-previous 0.2s";

            /* swap */
            nextSiblingBox.onanimationend = () => {
                if(nextSiblingBox == null) return;
                
                nextSiblingBox.style.animation = "";
                targetBox.insertAdjacentElement("beforebegin", nextSiblingBox);
                targetBoxMargin += nextSiblingBox.offsetWidth;
            }
            isChange = true;
        }
    }
    
    document.onmouseup = () => {
        if(!dragging) return;
        
        dragging = false;
        isChange = true;

        targetBox.style.zIndex = "0";
        targetBox.style.left = "0px";
        targetBox.style.animation = "";

        if(nextSiblingBox != null){
            nextSiblingBox.style.left = "0px";
            nextSiblingBox.style.animation = "";
        }
        if(previousSiblingBox != null){
            previousSiblingBox.style.left = "0px";
            previousSiblingBox.style.animation = "";
        }

        targetBox = null;
        nextSiblingBox = null;
        previousSiblingBox = null;

        targetBoxMargin = null;
        nextSiblingBoxMargin = null;
        previousSiblingBoxMargin = null;

        mouseCursorXCoordinate = null;
    }

});