function grade_calc()
{
    let name = document.getElementById('name').value;
    let s_id = document.getElementById('school_id').value;
    let s1 =parseFloat(document.getElementById('sub_1').value)||0;
    let s2 = parseFloat(document.getElementById('sub_2').value)||0;
    let s3 = parseFloat(document.getElementById('sub_3').value)||0;
    let s4 = parseFloat(document.getElementById('sub_4').value)||0;
    let s5 = parseFloat(document.getElementById('sub_5').value)||0;

    let total = s1+s2+s3+s4+s5;
    let per = total/5;let g = 'F';
        if(per<100 && per>90)
        g = 'A';
       if(per<=90&& per>80)
        g = 'B';
      if(per<=80 && per>65)
        g = 'C';
      if(per<=65 && per>35)
        g = 'D';
    document.getElementById('res').innerHTML = `<strong> Name:${name}</strong><br>Total:${total} <br>Result:${g}`;
}