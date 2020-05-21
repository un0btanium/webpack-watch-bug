import Main2 from './main2'; // this works

export default class Main {

	static startApplication() {
		
		// when using alias as well as cyclic dependencies between modules the webpack watch feature seems to break

		// make changes here
		// webpack watch does not recognize changes after the second change
		console.log("Test1");
		console.log("Test2");
		console.log("Test3");
		console.log("Test4");
		

		
	}
}