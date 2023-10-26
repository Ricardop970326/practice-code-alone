/*Data 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. 
Data 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
BMI = mass / height ** 2 = mass / (height * height)
 





     /*1. Store Mark's and John's mass and height in variables  */
     let markw1 = 78;
     let markh1 = 1.69;


     /*2. Calculate both their BMIs using the formula */
     let markBMI = markw1 / (markh1 **2 )



     let johnw1 = 92;
     let johnh1 = 1.95;

     let johnBMI = johnw1 / (johnh1 ** 2)
     

     /*3. Create a Boolean variable 'markHigherBMI' containing information about whether   
     Mark has a higher BMI than John.*/
    let highestbmi = markBMI > johnBMI;

    if (highestbmi){
        console.log("mark is higher bodymassindex")
    } else{
        console.log("john has higher bodymassindex")    
    }
