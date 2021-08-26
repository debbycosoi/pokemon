
    <script>

    var name = prompt("enter name")
    console.log(`${name}`)

    var body = document.firstElementChild.lastElementChild;
    var header = body.firstElementChild;
    header.innerHTML = `Hi ${name}`;


</script>