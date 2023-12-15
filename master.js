   document.getElementById("name").addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })
        document.getElementById("name").addEventListener("keyup", (e) => {
            let name = document.getElementsByClassName("name")
            if (e.target.value.search(/[1-9]/) >= 0) {
                e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                alert("Please enter a word!")
            }
            else {
                name[0].children[1].innerHTML = e.target.value
            }
        })

        document.getElementById("cvv2").addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(360deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 1
            }, 100);
        })
        document.getElementById("cvv2").addEventListener("keyup", (e) => {
            if (e.target.value.search(/[a-z]/) >= 0 ||
                e.target.value.search(/[A-Z]/) >= 0 ||
                e.target.value.search(/[آ-ی]/) >= 0 ||
                e.target.value.search(/[ئءأأؤًٌٍَُِّا]/) >= 0) {
                e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                alert("Please enter a number!")
            }
            else {
                document.getElementById("cvv2num").innerText = e.target.value
            }
        })
        let cardnum = document.getElementById("cardnum")
        cardnum.children[1].addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })
        cardnum.children[1].addEventListener("keyup", (e) => {
            if (e.target.value.length < 4) {
                if (e.target.value.search(/[a-z]/) >= 0 ||
                    e.target.value.search(/[A-Z]/) >= 0 ||
                    e.target.value.search(/[آ-ی]/) >= 0 ||
                    e.target.value.search(/[ئءأأؤًٌٍَُِّا]/) >= 0) {
                    e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                    alert("Please enter a number!")
                }
            }
            else (
                e.target.nextElementSibling.focus()
            )
            document.getElementById("cardnum2").children[0].innerText = e.target.value
        })
        cardnum.children[2].addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })
        cardnum.children[2].addEventListener("keyup", (e) => {
            if (e.target.value.length < 4) {
                if (e.target.value.search(/[a-z]/) >= 0 ||
                    e.target.value.search(/[A-Z]/) >= 0 ||
                    e.target.value.search(/[آ-ی]/) >= 0 ||
                    e.target.value.search(/[ئءأأؤًٌٍَُِّا]/) >= 0) {
                    e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                    alert("Please enter a number!")
                }
            }
            else (
                e.target.nextElementSibling.focus()
            )
            document.getElementById("cardnum2").children[1].innerText = e.target.value
        })
        cardnum.children[3].addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })
        cardnum.children[3].addEventListener("keyup", (e) => {
            if (e.target.value.length < 4) {
                if (e.target.value.search(/[a-z]/) >= 0 ||
                    e.target.value.search(/[A-Z]/) >= 0 ||
                    e.target.value.search(/[آ-ی]/) >= 0 ||
                    e.target.value.search(/[ئءأأؤًٌٍَُِّا]/) >= 0) {
                    e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                    alert("Please enter a number!")
                }
            }
            else (
                e.target.nextElementSibling.focus()
            )
            document.getElementById("cardnum2").children[2].innerText = e.target.value
        })
        cardnum.children[4].addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })
        cardnum.children[4].addEventListener("keyup", (e) => {
            if (e.target.value.length < 4) {
                console.log(e.target.value.length)
                if (e.target.value.search(/[a-z]/) >= 0 ||
                    e.target.value.search(/[A-Z]/) >= 0 ||
                    e.target.value.search(/[آ-ی]/) >= 0 ||
                    e.target.value.search(/[ئءأأؤًٌٍَُِّا]/) >= 0) {
                    e.target.value = e.target.value.slice(0, (e.target.value.length) - 1)
                    alert("Please enter a number!")
                }
            }
            else (
                document.getElementById("name").focus()
            )
            document.getElementById("cardnum2").children[3].innerText = e.target.value
        })

        document.getElementById("validnum").addEventListener("click", () => {
            document.querySelector(".card").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("behind").style.opacity = 0
            }, 100);
        })

        document.getElementById("validnum").children[0].addEventListener("keyup", (e) => {
            if (e.target.innerText.length < 2) { }
            else {
                document.getElementById("validnum").children[1].focus()
            }
            document.getElementById("valid").children[0].innerText = document.getElementById("validnum").children[0].innerText
        })

        document.getElementById("validnum").children[1].addEventListener("keyup", (e) => {
            if (e.target.innerText.length < 2) { }
            else {
                document.getElementById("cvv2").focus()
                document.querySelector(".card").style.transform = "rotateY(360deg)"
                setTimeout(() => {
                    document.getElementById("behind").style.opacity = 1
                }, 100);
            }
            document.getElementById("valid").children[1].innerText = document.getElementById("validnum").children[1].innerText
        })