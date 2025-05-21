class Solution(object):
    def searchInsert(self, nums, target):
      insert_index=len(nums)
      nums_sorted=sorted(nums)
      j=0
      k=0
      while j<len(nums) and k<len(nums_sorted)-1:
        if nums[j]==target:
            return j
        if nums_sorted[k]<target and nums_sorted[k+1]>=target:
            insert_index=k+1     
        j+=1
        k+=1

      if j==len(nums) and k==len(nums):
        return insert_index
      
Solution.searchInsert([1,5,7],2)