<!DOCTYPE html>
<html>
<head>
<title>DOM Manipulation</title>
<style>
    #heading {
    color: blue;
}
    #heading:hover {
    color: red;
}
</style>
</head>
<body>
<h1 id="heading">Original Heading</h1>
<button onclick="changeText()">Change Text</button>
<script>
    elem=document.getElementById('heading')
    console.log(elem)
    console.log(elem.innerText)
    function changeText() {
    document.getElementById("heading").innerText = "Text Changed!";
}

    // ele=document.querySelector('#heading')
    // console.log(ele)
    // console.log(ele.innerText)
    // ele.style.color = "green";
</script>
</body>
</html>