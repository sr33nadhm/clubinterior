import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { $ } from "protractor";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"],
})
export class MenubarComponent implements OnInit {
  @Input("page") page: string;
  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    let menubar = this.el.nativeElement.querySelector("#menubar");
    let navLink = this.el.nativeElement.querySelectorAll(".nav-link");
    let navItem = this.el.nativeElement.querySelectorAll(".nav-item");
    let brand = this.el.nativeElement.querySelector(".navbar-brand");
    let dropDownMenu = this.el.nativeElement.querySelector(".dropdown-menu");
    let dropDownItem = this.el.nativeElement.querySelectorAll(".dropdown-item");
    if (this.page == "home" && window.innerWidth > 768) {
      brand.classList.add("transparent-white");
      menubar.classList.add("transparent-white");
      menubar.classList.add("home-navbar");

      navLink.forEach((element) => {
        element.classList.add("transparent-white");
      });

      navItem.forEach((element) => {
        element.classList.add("transparent-white");
      });

      dropDownMenu.classList.add("transparent-white");

      dropDownItem.forEach((element) => {
        element.classList.add("dropdown-transparent-hover");
      });

      menubar.classList.remove("bg-light");
      menubar.classList.remove("navbar-light");
    }
    this.setActive(this.page);
  }

  setActive(page) {
    console.log(page);
    let navLink = this.el.nativeElement.querySelector("." + page);
    navLink.classList.remove("transparent-white");
    navLink.classList.add("active");
  }

  navigate(product) {
    console.log(product);
    if (product == "kalpasiri") {
      this.router.navigate(["products"], {
        state: { name: "Kalpasiri Oil" },
      });
    }
    if (product == "deepam") {
      this.router.navigate(["products"], {
        state: { name: "Deepam Oil" },
      });
    }
    if (product == "sesame") {
      this.router.navigate(["products"], {
        state: { name: "Sesame Oil" },
      });
    }
  }
}
