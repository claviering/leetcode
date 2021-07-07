def getnext(needle):
    a=len(needle)
    next=['' for i in range(a)]
    k=-1
    next[0]=k
    for i in range(1,len(needle)):
        while (k>-1 and needle[k+1]!=needle[i]):
            k=next[k]
        if needle[k+1]==needle[i]:
            k+=1
        next[i]=k
    return next

print(getnext("aabaaf"))