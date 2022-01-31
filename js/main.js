const app = Vue.createApp({
    data(){
        return{
            titulo: "Contador VUE",
            count: 0,
        };
    },
    methods:{
        addInt(){
                console.log('estás haciendo click en aumentar');
                this.count++;
        },
        disInt(){
                console.log('estás haciendo click en disminuir');
                this.count--;
        },
        modCont(instruction = 0, limit=0){
            if(instruction===1){
                this.count+=limit;
            }else{
                this.count-=limit;
            }
        },
    }
})