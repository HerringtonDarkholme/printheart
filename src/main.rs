#[allow(unused_mut)]
#[allow(unused_parens)]
#[allow(unused_variables)]
// https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=770a462f8e6ecd64edbc03868f64a4f6


fn main() {

       let                mut
     arr=[6,1,6,       6,6,1,6,1,
   0,1,0,1,0,1,1,     0,0,1,0,0,1,1,
  4,5,2,3,9,1,6,1,0,0,0,1,6,6,6,1,0,1,
  6,6,6,6,6,1,6,6,6,6,6,6,6,6,6,6];for
  (k,v)in arr.into_iter().enumerate()
   {if(k%7==0){println!("");}match v{
    6=>print!("{}"," ".repeat(3)),0=>
     print!("***"),4=>print!("**"),5
       => print!("I**"),2=>for &j in
       [76,79,86,69].iter(){print!(
        "{}", j as u8 as char);},
         3=>{print!("YOU");},9
          =>print!("*"),1=>
            print!("***"),b
              =>{();}}
                 };}
