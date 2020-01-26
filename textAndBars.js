var progressBars = {}

function fnCreateBars(lstBars, blTitle = true, blCollapse = false) {
    // Sorts the array based on the skill level
    lstBars.forEach(x => x[1].sort(compare));

    var superContainer = $("#container-super")[0];
    var delay = 0;
    for (var i = 0; i < lstBars.length; ++i) {

        var newDiv = document.createElement("div");
        newDiv.classList.add("container");
        newDiv.classList.add("bar-container");

        superContainer.appendChild(newDiv);

        var subDiv = document.createElement("div");
        subDiv.className += "collapse"
        subDiv.id = lstBars[i][0];
        newDiv.appendChild(subDiv)

        if (blTitle) {
            var newH3 = document.createElement("h3");
            newH3.innerHTML = lstBars[i][0];
            newDiv.insertBefore(newH3, subDiv);
            newDiv.insertBefore(document.createElement("hr"), subDiv);

            if(blCollapse) {
                newH3.setAttribute("data-toggle", "collapse");
                newH3.className += "resume";
                newH3.setAttribute("data-target", "#" + lstBars[i][0]);
                console.log(newH3.getAttribute("data-target"));
                newH3.onclick = function (e) { fnRefreshBars(e.target.getAttribute("data-target")) };
            }
        }

        for (var k = 0; k < lstBars[i][1].length; k++) {
            fnTextAndBars(subDiv, lstBars[i][1][k][0], lstBars[i][1][k][1], delay++);
        }
    }
}

function createBar(current, num, waitTime, intDelayms = 100, animate = false) {
    if(current.id in progressBars) {
        num = progressBars[current.id][1];
        progressBars[current.id][0].destroy();
    }

    setTimeout(function() {
        var bar =
            new ProgressBar.Line(current, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1000*animate,
            color: '#FFEA82',
            svgStyle: {width: '100%', height: '100%'},
            from: {color: '#337ca0'},
            to: {color: '#00c714'},
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
            }
        });

        progressBars[current.id] = [bar, num];

        progressBars[current.id][0].animate(num);

    }, waitTime*intDelayms*animate)
}

function fnTextAndBars(htmlObject, strLanguageName, fltBarLevel, fltDelay) {
    var id = strLanguageName.replace(/\s/g, '');
    id = id.replace(/#/g, "s");
    id = id.replace(/\//g, "-");
    id = id.replace(/\+/g, "p");

    // Create row
    var row = document.createElement("div");
    row.classList.add("row");

    var descColumn = document.createElement("div");
    descColumn.classList.add("col-4");

    var barColumn = document.createElement("div");
    barColumn.classList.add("col-5");

    var justification = document.createElement("div");
    justification.classList.add("d-flex");
    justification.classList.add("justify-content-end");
    justification.setAttribute("style", "margin-right: 0pt; margin-left: 0pt;");

    var boxOutline = document.createElement("div");
    boxOutline.classList.add("rounded-box");
    boxOutline.innerHTML = strLanguageName

    var barOutline = document.createElement("div");
    barOutline.classList.add("progress-bar");
    barOutline.id = id;


    justification.appendChild(boxOutline);
    descColumn.appendChild(justification);
    row.appendChild(descColumn);

    barColumn.appendChild(barOutline);
    row.appendChild(barColumn);

    htmlObject.appendChild(row);

    createBar(barOutline, fltBarLevel, fltDelay);
}

function compare(a, b) {
    return ((a[1] > b[1]) ? -1 : 1);
}

function fnRefreshBars(strParentID, fltDelayms = 100) {
    var htmlObject = $(strParentID)[0];

    if (!htmlObject.getAttribute("class").includes("show")) {
        var delay = 0;

        for (var i = 0; i < htmlObject.childNodes.length; i++) {
            if(htmlObject.childNodes[i].tagName == 'DIV') {
                var barHolder = htmlObject.childNodes[i].querySelector('.progress-bar');
                createBar(barHolder, 0, delay++, fltDelayms, animate = true);
            }
        }
    }
}
