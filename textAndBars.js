var progressBars = {}

const lstSkillLevels = [
    "Beginner",
    "Intermediate",
    "Versed",
    "Skilled",
    "Proficient",
    "Adept"
]

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
                newH3.onclick = function (e) { fnRefreshBars(e.target.getAttribute("data-target")) };
            }
        }

        for (var k = 0; k < lstBars[i][1].length; k++) {
            fnTextAndBars(subDiv, lstBars[i][1][k][0], lstBars[i][1][k][1], lstBars[i][1][k][2], delay++);
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

function fnTextAndBars(htmlObject, strLanguageName, fltBarLevel, strLink, fltDelay) {
    var id = strLanguageName.replace(/\s/g, '');
    id = id.replace(/#/g, "s");
    id = id.replace(/\//g, "-");
    id = id.replace(/\+/g, "p");

    // Create row
    var row = document.createElement("div");
    row.classList.add("row");

    var descColumn = document.createElement("div");
    descColumn.classList.add("col-lg-4");
    descColumn.classList.add("col-sm-3");

    var barColumn = document.createElement("div");
    barColumn.classList.add("col-lg-6");
    barColumn.classList.add("col-sm-1");
    barColumn.classList.add("bare");
    barColumn.setAttribute("style", "display: flex; flex-wrap: wrap; align-content: right;");

    var justification = document.createElement("div");
    justification.classList.add("d-flex");
    justification.classList.add("justify-content-" + (($(window).width() < 500)?"center":"end"));
    justification.classList.add("container-fluid");
    justification.classList.add("bare");

    var boxOutline = document.createElement("div");
    boxOutline.classList.add("rounded-box");
    boxOutline.innerHTML = strLanguageName

    if(strLink != undefined) {
        boxOutline.classList.add("box-link");
        boxOutline.onclick = function() {
            window.open(strLink, "_blank");
        };
    }

    var barOutline = document.createElement("div");
    barOutline.classList.add("progress-bar");
    barOutline.id = id;

    // var tooltip = document.createElement("span");
    // tooltip.classList.add("tooltiptext");
    // tooltip.innerHTML = lstSkillLevels[Math.round(fltBarLevel*(lstSkillLevels.length-1))]
    // barColumn.appendChild(tooltip)

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
