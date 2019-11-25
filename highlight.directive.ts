import{Directive,ElementRef,Renderer,HostListener,Input} from "@angular/core"
@Directive({
    selector:'[highlight]'
})

export class highlight{
    @Input('highlight') color:string;
    flag :boolean=false;
    constructor(private el:ElementRef,private renderer:Renderer)
    {
        this.flag=false;
         this.renderer.setElementStyle(this.el.nativeElement,'cursor','pointer');
    }
    @HostListener("click")
    onclick():void{
      if(this.flag==false)
      {
       this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',this.color);
       this.flag =true;
      }
      else{
           this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor','white');
           this.flag =false;
      }
    }
}