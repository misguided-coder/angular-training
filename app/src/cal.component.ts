//A4 imports
import {Component,Inject,OnInit,OnDestroy} from "@angular/core";

//App imports
import {ICalService} from "./cal.interface";
import {JokeService} from "./joke.service";


@Component({
	templateUrl:'partials/cal.component.html',
	selector:'cool-app',
	styleUrls:['css/themes/cal.component.a11y.css']
})
export class CalComponent implements OnInit,OnDestroy {
	
	title:string = "Simple Math Calculator";
	valOne:number = 10;
	valTwo:number = 0;
	result:number = 10;
	//private calService:ICalService = null;
	errorMessage = "";
	currentJoke:string ="";
	clock:any;

	//DI is happeining here on service argument using named provider
	/*constructor(@Inject('simpleCalculator') private calService:ICalService){
		//this.calService = calService;
	}*/

	/*constructor(private jokeService:JokeService,@Inject('simpleCalculator') private calService:ICalService){
	}*/

	constructor(private jokeService:JokeService,@Inject('calculator') private calService:ICalService){
	}
	
	
	ngOnInit(){
		var self = this;

		this.clock = window.setInterval(function(){
				self.currentJoke = self.jokeService.nextJoke();
		},2000);
	}

	ngOnDestroy(){
		window.clearInterval(this.clock);
	}
	
	doSum(){
		this.result = this.calService.sum(this.valOne,this.valTwo);	
	}

	doDiff(){
		this.result = this.calService.diff(this.valOne,this.valTwo);	
	}

	doMultiply(){
		this.result = this.calService.multiply(this.valOne,this.valTwo);	
	}

	doDivide(){
		try{
			this.result = this.calService.divide(this.valOne,this.valTwo);	
		}catch(ex){
			console.log(ex);
			this.errorMessage  = ex.message
		}
	}

}
