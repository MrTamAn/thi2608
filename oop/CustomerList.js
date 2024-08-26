class CustomerList{
    nameOfProject;
    constructor(nameOfProject) {
        this.nameOfProject = nameOfProject;
        this.listOfCustomer = [];
    }
    addNewCustomer(newCus){
        this.listOfCustomer.push(newCus);
    }
    getAll(){
        return this.listOfCustomer;
    }
}