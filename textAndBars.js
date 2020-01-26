var progressBars = {}

function fnCreateBars(lstBarDicts, blTitle = true) {
    var superContainer = $("#container-super")[0];
    var delay = 0;
    for (var superKey in allBars) {

        var newDiv = document.createElement("div");
        newDiv.classList.add("container");
        newDiv.classList.add("bar-container");
        newDiv.id = superKey;

        superContainer.appendChild(newDiv);

        if (blTitle) {
            var newH3 = document.createElement("h3");
            newH3.innerHTML = superKey;
            newDiv.appendChild(newH3);
            newDiv.appendChild(document.createElement("hr"));
        }

        for (var key in lstBarDicts[superKey]) {
            fnTextAndBars(newDiv, key, lstBarDicts[superKey][key], delay++);
        }
    }
}

function createBar(current, num, waitTime, intDelayms = 100) {
    setTimeout(function() {
        // console.log(current);
        progressBars[current.id] =
            new ProgressBar.Line(current, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1000,
            color: '#FFEA82',
            svgStyle: {width: '100%', height: '100%'},
            from: {color: '#337ca0'},
            to: {color: '#00c714'},
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
            }
        });
        progressBars[current.id].animate(num);

    }, waitTime*intDelayms)
}

function fnTextAndBars(htmlObject, strLanguageName, fltBarLevel, fltDelay) {
    var id = strLanguageName.replace(/\s/g, '');
    id = id.replace("#", "s");
    id = id.replace("/", "-");
    id = id.replace("+", "p");

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
