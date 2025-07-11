import { RefObject } from "react"

export const useDropdownPosition = ( 
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
   const getDropdownPosition = () => {
    if(!ref.current) return {top: 0, left: 0};

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;  //width of dropdown box 

    //calculate initial positon
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    //to check if dropdown would go off the right edge of the viewport- makesure doesn't overflow depending on diff screen sizes
    
    if(left + dropdownWidth > window.innerWidth){
        //align to right edge of button instead

        left = rect.right + window.scrollX - dropdownWidth;

        //however if still off-screen, align to the right edge of viewport with some padding 

        if (left < 0){
            left = window.innerWidth - dropdownWidth - 16;
        }


    }

        //same check, to see if dropdown doesn't go off left edge

        if (left < 0){
            left= 16;

        }

        return {top, left};


   };
   return {getDropdownPosition};
};