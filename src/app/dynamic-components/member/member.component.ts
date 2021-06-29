import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostDirective } from './../../ui-tools/host.directive';
import { MemberoneComponent } from './memberone/memberone.component';
import { MembertwoComponent } from './membertwo/membertwo.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @ViewChild(HostDirective, { static: true })
  childRef: HostDirective;

  components = [MemberoneComponent, MembertwoComponent];

  constructor(
    public factoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  loadComponent(id: number): void {
    this.childRef.viewRef.clear();
    const resolvedFact = this.factoryResolver.resolveComponentFactory(this.components[id]);
    this.childRef.viewRef.createComponent(resolvedFact);
  }

}
