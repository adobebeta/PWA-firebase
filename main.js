document.addEventListener("DOMContentLoaded", () => {
    let firestore = firebase.firestore()

    initialize()
    addTodo(() => {
        append(id("todo").value)
    })

    console.log(firestore)


  firestore.collection("Collection").doc("Document").set({
      data1: "Project",
      data2: "Homework",
  }).then(() => {

  })

  firestore.collection("Collection").doc("Document").update({
      title: "Firestore Project"
  })

  firestore.collection("Collection").doc("Document").get().then((doc) => {
    if(doc.exists)
        console.log(doc.data())
    }).catch(error =>{
    console.warn(error)
  })

  

  firestore
    .collection("Collection")
    .where("title", "==", "Firestore Project")
})

