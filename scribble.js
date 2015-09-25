function unite(arr1, arr2, arr3) {
var that = this;
this.caught = [];
  
  for (var i = 0; i < arr1.length; i++)
    {
      var safe = true;
      for (var i2 = 0; i2 < this.caught.length; i++)
        {
          if (arr1[i] == this.caught[i2])
            {
              safe = false;
            }
        }
      if (safe === true)
        {
          this.caught.push(arr1[i]);
        }
    }
  
  for (var i = 0; i < arr2.length; i++)
    {
      var safe = true;
      for (var i2 = 0; i2 < this.caught.length; i++)
        {
          if (arr2[i] == this.caught[i2])
            {
              safe = false;
            }
        }
      if (safe === true)
        {
          this.caught.push(arr2[i]);
        }
    }
  
  for (var i = 0; i < arr3.length; i++)
    {
      var safe = true;
      for (var i2 = 0; i2 < this.caught.length; i++)
        {
          if (arr3[i] == this.caught[i2])
            {
              safe = false;
            }
        }
      if (safe === true)
        {
          this.caught.push(arr3[i]);
        }
    }
  return this.caught;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
