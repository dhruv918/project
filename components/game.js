AFRAME.registerComponent('game-play',{
    schema:{
        elementId:{type:'string',default:'#ring1'}

    },
    update:function(){
        // console.log("test update")
    this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        // console.log("test")
    const element=document.querySelector(elementId)
    console.log(elementId," $$")
     element.addEventListener('collide',(e)=>{
        if(elementId.includes('#ring')){
            console.log(elementId+'collision')
        }
        else if(elementId.includes('#hurdle1')){
            console.log('birdCollision')
            alert("called")

        }
console.log('collided')
    })
    }
})