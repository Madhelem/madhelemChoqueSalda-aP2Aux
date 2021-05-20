 //-------------------TAREA 2-1  Cree una clase llamada “Department”
// - Agregue las siguientes propiedades a la clase:
/*
o owner: su nombre completo
o id: un id para identificar el departamento
o workers: una lista de los trabajadores
o createWorker: un método para agregar empleados al departamento
o showEmployeesInfo: un método para mostrar la información de los empleados (la cantidad y los nombres)*/
 
class Department {
    //Use el modificador “private” en la propiedad name de la clase “Deparment”
    constructor(protected owner: String ,public _id?: number) //cambiemos  el modo  de  acceso de la variable o "utilizar modificadores"  a "protected" porque private nos  saldra error  al utilizar 
                                                              //  a las  demas clases heredadas si lo tubiera 
    {
        this.owner=owner;
        this._id=_id;


    }         


    private static workers: Array<Department> = [];//no necesiamos de una  instancia  para  ejecutarla
//createWorker: un método para agregar empleados al departamento
    public static createWorker(user: Department): void {
        
        this.workers.push(user);
        
     
    }


//showEmployeesInfo: un método para mostrar
// la información de los empleados (la cantidad y los nombres)
     public static showEmployeesInf (): void {
        console.log(this.workers );
        console.log("la cantidad  de  empleados  son:"+this.workers.length);
    }
    


}
//Cree una instancia de la clase “Department” tomando como argumento su nombre y un id para identificar el Departamento
// (programe el constructor como desee para este fin) y luego agregue 3 empleados


let empleadoq1: Department = new Department("Felipe",1);
let empleadoq2: Department = new Department("analis",2);
let empleadoq3: Department = new Department("maria",1);
Department.createWorker(empleadoq1);
Department.createWorker(empleadoq2);
Department.createWorker(empleadoq3);
//Muestre la información de los empleados haciendo uso del metodo
Department.showEmployeesInf();//aqui  nos  muestra  toda la informacion




//-------------------- herencia 

//Cree otra clase llamada “CEODeparment”
class CEODeparment extends Department
{
//Herede las propiedades de la clase “Deparment”
//Agregue las siguientes propiedades:
//o admins: una lista con los roles disponibles. Como ser: “AUTHOR”, “ADMIN”, etc
public admins: Array<String> = ["author", "admin"];
constructor(public owner: string ,public _id?: number) {
     super(owner,_id); 
     
    
}         



}
//- Cree una instancia de “CEODepartment” y agregue tres roles tomados como uno de los argumentos
let hd= new CEODeparment("author");
//- Muestre la propiedad “admins” de la instancia creada
hd.admins.push("servicio","redes","contaduria")
console.log(hd.admins);



//--------herencia


//Cree otra clase llamada “ReportsDepartment” y herede la clase “Department”

class ReportsDepartment extends Department
{
/*- Agregue las siguientes propiedades:
o reports: una lista que contendrá reportes. Por ejemplo: “task 004 failed”, etc
o addReport: un método para agregar nuevos reportes*/   


//Impida que se agreguen mas reportes salvo utilizando el método creado (use modificadores)  

private reports: Array<String>;
constructor(nom: String, id?: number) {
    super(nom, id);
   
this.reports=new Array<String>();

}

public addReport(infre:String): void
{
        
        this.reports.push(infre);
                
}


/*Agregue un método “greet” en la instancia de la clase “ReportsDepartment” para mostrar un mensaje de la siguiente manera: “Hello ${name} there are ${reports.length} reports” 
donde “name” y “reports” son las propiedades correspondientes.*/
greet  () {
        
      console.log(`Hello ${this.owner} there are ${this.reports.length} reports`)
     //esta  funcion sale  error  si  cambiamos   en modos  de  acceso de  la  variable 
     //owner a "private" pero  si  modificamos  esta  por "protected" esta  nos  permite  usar  la  
     //variable   en diferentes  metodos  de la clase .         
} 



}
//Cree una instancia de la clase “ReportsDepartment”
let r1 = new ReportsDepartment("task 004 failed");
//Ejecute el método “addReport” para agregar tres reportes
r1.addReport('task 004 failed');
r1.addReport('task 005 failed');
r1.addReport('task 006 failed');


/*Agregue un reporte sin usar el método addReport
/*r1.reports.push('task 008 failed');//ERROR  PORQUE  SE  RESTRINGIO  COMO  PRIVATE A 
                                      A  LA  VARIABLE  "reports"
console.log(r1.reports);*/ 

/*Agregue un método “greet” en la instancia de la clase “ReportsDepartment” para mostrar un mensaje de la siguiente manera: “Hello ${name} there are ${reports.length} 
reports” donde “name” y “reports” son las propiedades correspondientes.*/

console.log(r1.greet());//ver  mas  ariba el metodo 
