
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageSquare, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentFeedback = () => {
  const { toast } = useToast();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  
  const recentFeedback = [
    {
      id: 1,
      teacher: {
        name: "Dr. Priya Nair",
        avatar: "https://th.bing.com/th/id/OIP.7OJtKO2UEOOAQD5a7a5nUwHaEP?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        subject: "Mathematics"
      },
      date: "Apr 3, 2023",
      message: "Great job on your algebra assignment! Your approach to solving the equations was very methodical. I particularly liked your clear step-by-step work. Keep it up!",
      assignment: "Algebra Problem Set #2"
    },
    {
      id: 2,
      teacher: {
        name: "Mr. Sanjay Kulkarni",
        avatar: "data:image/jpeg;base64,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",
        subject: "English Literature"
      },
      date: "Mar 28, 2023",
      message: "Your essay on Hamlet shows deep understanding of the characters' motivations. Your analysis of the themes was insightful, though you could develop your conclusion more thoroughly. Let's discuss this in our next class.",
      assignment: "Hamlet Character Analysis"
    }
  ];
  
  const teachers = [
    {
      id: 1,
      name: "Dr. Vandana Sharma",
      avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADtAWUDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABAECAwUGAAf/xAA6EAABAwMCAwYFAwQBAwUAAAABAAIRAwQhEjEFQVETFCJSYXEVMoGRoQZCwSNisdEkcuHwJTNDkvH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAwADAQADAQAAAAAAAQIRAyESEzEEIkEyFEJRYf/aAAwDAQACEQMRAD8A1hmT7rpPqlIyUhC5mqGpU0jcoWpdAcyluXFoP1Wfu7l7CcpWqk2ujeDzJO+jqVmDeVOqQ3lTqp2rxafvrfMUnfW9VljeVOp+6TvlTqUbHi1XfW+b8ru+DqsqLt55/lP73U6lGx4tN3weZJ3wdVmu9VDzK7vVT1RseLS98b1KTvg6rOd5qdSu7zU6lGx4tF3wdUnfG9VnDcVOpTTc1OpRseLSd9HmSOv2j935WbNzU9UPUu6gByUF4tQeIgfuTTxNvmWNq39UcyhTxOqDumPFvPibfMl+JjzflYUcRqnmU74hV6lLa5x7bf4m3zJDxNvmWJ7/AFep+6Y7iFbr+UbP1tueKN8yb8UaSBq/Kwj+I1RzP3UTeJ1i9gncqpNs8pp6dQuw+Mqxpu1BY3hVy94ZJ5Bay1JIBRpmJOAUHWraZyjXjwqkvqhaHIBX37WmNSZ8RaP3LJ3/ABB1NxzzVf8AFn9Sno9N38RaT8yT4g3zBYX4q/qV3xWp1P3T0em5+ItP7vyu+IN8yw44o/qfuuPFH9Sg/FtjxFo/cm/E2+ZYZ/FKvUqB3Fq3qjSdPQPibfN+Uo4m3HiXng4rW9VKzidYxujQk29BHEm+ZOHEW+ZYenfVjzKm73VMZKjbacbZjiTfN+U8cTb5vysT3qr1Kd3qr1KPI/U2w4o3zflcsULit1K5LyP1PVuZ90jk6Mn3TStHMrbzY+xWYvtytRd7H2KzF9uVGTXFXJueacuKhpEZSJx5pqQpzeSeAkCdhMnJQuShBOXJcLigGlNI3TikKYMKFrDB90UUNW2KYVlcboJ7mtOT91NeXIa406eX8zyaq0umS6ST1Wkx39RctfBXeaY2kn8Lhdu5BvsUJJ5ALieqrxiPZkNF0JgtzzUzX034mCdp/wCyrPFuMqenMtI6/wCE/CHOXIVVplu4n15IdjAajI6owVCZaWmIzH+UraTdbHNMjV0yFGtNJlMmo4Q2Az2C2Vp8oWT4S2A36LX2o8ISZXpPU+VUHEdnfVaCoPCqLiA8LvqkUYHig8Z91WQrbig8Z9yqwDKW2shA32SFqlhLpRtUiKF0KUNEp2kI2qYhHNJUZpo4sBSdl6BHkfhsIKeFI1hRIZ6LgwI8leDqeIRDThRBsKURCztXIWE8JspwCS9JRsuSiIXJG9bO590x2wTzufdR1MBdLzFdeHB+qzl23UVeXr4BVW6nrWVy7bSKo0iAonAhXRt5afZV1xRLcwVNVARSLneF0JQNkQ6e1PTGynpkVKEglOCCJC7ZLBXEJgwppT+SaUwjPNVXE7sUGljCO0ft/a3zH+FYXVdtrQq1nD5RDR5nHACyNatUq1H1HnU5xk/6CvHHdRllo0kmSdzkzvKSJ5pJK6fX8LZk7S7llKJyI5JzATsJHuiaTCYDmnpMbeshIa2hbTduBjYgZIlXfDLBtchu7XAkzA08kLTpswS0ztMbhXnDaNRrg9hcWkEODTB0kRElRllpeOChq0HULisynU8LHkAOgmNskclLTqFhBeyJOSNkt2DQuKzajQ0F0YBj7lIxrTkEmf2z+U97ibNVreDPp1GtLDtAI5rYWo8IXmXDKz7e4ZpLg1xInyuiQSOi9K4dVFajSfsXNB9J5hTo6LqDwqjv2EhwE81fvBIVbcUw6RzRYUYHiFtLjI5qpfbuaZAW3u7LW445oB3DgZxy6LNtKzDLd7hJBn0Sm3qDktKzh8HZSO4fLfl/CD8mS0OG4SQr2tYaSfD+FXV7cszCdml45Bc9F0JcJeShqQApYKUJ8bKVQzSUoaU+EoQZoBUjWykUjOSRnBmFylGy5BvVYyo62xUvNQ19j7Lovx5mP1Q3zsn3UFCHESn33zEIe3dB9lxXL9nd4/qsezEHHVVl1RlrhGVah0gIa4bOVte4w+VmKzIJ901hJ3R91SgkgYKAgtcljVWJgnQVzYMJ4CtJoCWE4BKEA2EhATkhTBhATSpCMKGs5tNlSo4w1jHPd7NEpl8Z3jdz2lVtBp8NLLv+o+ipp6BSVqjqtSpVd81RxcfrmEttRfWqBoHq72W/+Y5/9UtK3rV3QwTsMK2o8DqvDdQHKZKsrG1ZTa0QNvqVd0aYAA/gLk5Oez47uL8ef9lJQ/T8kbNA35qyp8BbpADwOvhklW9NowiqQy1c15s7/XXODCfxn38ELIcC0if3CCB7BSMt6tFsuaWNwA1sgn3launRY4SQkrWbXsDWgYySd8Jzkv8AU5cWM+POb+i+q52omQZg7b7Equo06jXEchJbvstjxXhj6TX1GtJYQdW+PVZx7QwziMz1C7OO7jh5MdVHTqOn1EbGCvSOAVBVsLV42ggfQwV5o1wDzORuMZW+/SNfXZ3VHEUKxLeoFQatvutWFag7ISqz2RkeEewQ9TmmgC+kDyCHfQE4H4RxTHBRZ2uUGy3BO34U/dmxEfhSN3UwEpSCqe4swQcKhvLSJgdVs3sBBwqa9oCHY6rXXSZlqsLVp6XkeqbGEdf0ix5xiUGJXLk78O5s0DKlAlNShS1OAXAZSyUmUA6FI0KMSpWyg9JmtwuXAmFySnqnM+6grjBRHM+6gr/L9F1ZfHkz6zd/8xQlJwD/AHRfENyfdV7TBaV5ufWT0sO8Vox5iF1R0hDhxAn6p2uWrqw7jlz6oa4YHNKqqjIJ9FdRIKAuKYBJGxU/KqdwLTzhTAKEDS4KcbLSJrsLoShdCCNKROITSEzIVWcXqOp2Vf8AuAZPPJVmQqjjgmzO/wD7jBH3Kc+pvxl2tNR7Wj9xhaCztadFmB4jGolU1gA65b/YCfqrwXVClIdJI30ifyny239T4ZJ3VpQGQrSiCcKgocV4c0eNx+0n8K3teIWVUNLKoM+hBHplcWeGX/jt488f/VoxuyKotkjCEp1GuiIzspKt7StBqfOQPlE7rHVdPlJFzSwB+FMJBlZCp+rLZjy2la1qjgI8UAE+oblS0ONccu80OHua3PiLToz0LyFvOLLTnvLi1jmUarS2o0EOBa4RiCsD+ouDu4e816IJt3u9Tp9PZay2vryGtvLWpTOPHTaXNB9YlGXltRvbSvSeNTalMgEdeRRMrx5JyxmeLyJpbvn3la/9GViLu7pGdFS3a8Tzcx8T+Vla9v3e5qUKgP8ASqOb9QVpP0izteJV2B1SmBbEktyXDW3wmeq9D682vRMluepQtXYooM0tj/O8IapzCpEDjMprhgp7eY6riN5UZKiDZwRLEM8Q4FE08hKHTy3CAuqYIdhWZEgIeuyQVtj2zv1iOKW25jmVR6IW04hb6mvxyKy1Slpe4epXPyzVd3Degukrg3dEdmkLFi6EICcG7qTQlAQDQ1SBo5JwaVIGpLnZA3C5TBghcls9PTOZQ9x8v0KI6+6hrtkLsryGY4hMnCrxMbK/ubXXy6odtjAjSuLPjtrt485rsGySwY5EJoJBIyrSnaQCITX2UkGFfHLGXJZfgBszB5ptZgIONgrUW2xjK59rIOFeWKMcmXewyn0w6Iyrt1iCThc2xj9qJKdyU4Y5LpcrnuXol7iOiei8lHDk0td0Kve4jouNiOieh5KAtd0KDvKHaMqBzSQKboxzPNanuA6IevYQJDCcQY/BQN7eacPae9VGnHgcD1EGFesdRpMOoN0gScTj1Q9exqWfFq4IGh7XuYW7ZgkBJcW1aq0RJbIwJz7o5NW9r4+sSPvOCySbQHJ/qMIYMbmAE+h3Nxc6g+pTc3dlQ7HpK4WXbMp03N0NYCGwCImCj61sBaxs9tSvWdUcwGpVdV+Zr3HMbQlvHWlTHL7YtOF3Da5Y0e38K0v7dhYNeNIxBwqH9OUz2hJGAQtbfUnPDIbLdA/IhcWXWXTuw7x7YmtfUrRzxbWwqPY0vqOzpa0HdxH+1PZ/qe7eKYdaOcHCqW9jTc/w0jDyQ1xIAnOFLUsKtN1ZjA/RVlrwDu08iEXw7hlGi4u7OoC8FriJEg7g5XR5Ya7YePJv9V7wziVG8pU6lMgjqDqYR1aVdtLHtwIGfuqWy4fb0Tqo0W09WCKQ0g+4GFdUmhjdI29eq5cvvTo1139eZ/qOkaHFriWxrDXgYAdjJWt/Tdtw6ytuEuNsRe8Rtm1qtznxTL2sz6eiH/U/DDdVbao1gJ0OpVDjAJwfyVpqFtTDeHkAaba1pU6WNobpn7LoudymOOH1zTCYXLLP4Lfsg6kyUc5sgId7JK9DTzYBYTqiFI5pyIUwo+LATzSyfZK4ntX1GmJjmpaEkBEmjIOEtOjplTo7SgYUdRkg4RbWYSOpyrx6RVFc0pBx1WWvbV7ajiG4lb2rQDpwq+vYNeSdKnkx214s/GsP2FTyruwqeUrY/DB5UvwtvlWPrrp90Yzu9XypO71Z+UrafC2+X8JRwtnlR66PdGOFCr5SpBQqj9pWvHC2eX8J3wxvlS9VVOeMkKNXylcteOGN8oXJeqq/5GK2xJ90jmghM7USdt0oqhbuBGaIPJcLcdFL2rUvat6pWbG6iFABcaAKl7UJe1CNDdQdgEvYBS9oF3aBGggNuJ2Si3HQKYVAl7QJ6CAW46Lu7jp+FP2gXdoEaCDu46Lu7joiA8FOkFBBDQb0THWoM43B5I6E0mN09Bi+P8OaLcV2tOui7xY/a7BhU1o1jgARzW94gxte0vaRALnW9fTI56CQsBaHIHquXmdn49n9WjLZhiAMeiF4nTZStyOboCtaMECN8Kj41W7W6Za0z4WNl0c3dFzY226d2WpBP6eEVHAjDi2MbwttUpse0DGGhZPgzWBjDMObAz/K1odQbRaH1Gtc6Ic8gT6CUsvp4zUipuKVMEggEjmlt6MkRO4Q986pRq1nZdSDsubkQeeEXZVmloIMyBCy+tVrQpNY2TJKkcNklJ2rT9lM4SAqZX6Hr2jLmm4PJDQ5pGncxuETTGGx8oADY2gKJ1YCabTsSKnpHILqNRjWNAJgTz9V3cGGv2rg/I5d/rBkAhMLBKaKwS9sF2OEugYTtATO1CXtQgFNMLhTXdsF3bBAODQl0hR9qF3ahBHFgPJNNEFL2wXdt6oBvYDoEvYtxgJe1C7tgg3CiOgS9g3oEragdspgZTCEUW+iXsW9B9lNsml4HNHQIKLeg3XLhVC5LoMh38SfEni/HmWT7xVnc/dOFzV6n7rn26fFq+/t8yd35vVZLvFU8/ynC5q9T90bLxazvzeq7vw6rKi5q9T90veavU/dGx4tT31vVd30dVlu9VOpThc1OpS2PFqRejql76PMsy25qdT90veanU/dG6PFpe+jzLu+jzLNd5q9fyk7xVxnpzRsvFsKNcOjKNpmQs5YVXOiStBQkgLXFnehBwMIaq6AZRJmCgbkkAx0KdKAq9wAXAmAQWk+hELDUvBVeDu1zh9itFf1HtLsrOvB7Vzhs4z9Vz8nbp4eqte8ijRLzM/t91QVmGpUc6XB7nF07GVbsArW7hPiZkfQKieLyjUJDg9pMw8Zb7ELDGOzOrXhZurckCodMyQ4StLRq0LnS6rTpOe0Rqc0EtHQErJ2tW+cf6QpEmAIO/vIVvR+JkAsFNoiTNRrWn1xlLPBvhF7UpsLCIGgiI5Qq+2ebWsaRINIk9men9pXBnFK1PS25NNpEOdSEkCP2uI3SCyFOrTMvJAzqcXF3PxErCyRWu2jtqoMQUc0zpnYkT7bqotGloZnbqp+IXbbOxuaxcA/QadITk1Hy0R+UsO0ZqZvEg6rcEPJDq1UtmObid0Q3iDBGVk+2qDYwFwuKvVelLqaedePd2144i0/uCcOIt8wWPFxV8yXt60/Mjzo9TYDiLfMEvxBvmWPFxV83+U/t6vm/KPOn6Y1vxBvmCT4i3qsl3it5ik7xW8xR5j0xrviLfMF3xFvmCyPb1fMk7et5kewemNf8Rb5glHEW9QsgK1XzKUV6vmKfsp+mNX8Rb5gk+IDzBZftah/cUvaVPMful7KPTG2tbnXGVa0zIKynCqjiGyZ2Wpo/L9F0Y3ccmc8bpKdkBcVgwE9Ec75VR8TcRTdB5J5dQsJu6cL9pnPNcs0KtTPi5lcuX213Tgih5rlPUpaZUHNNjDglTU4JGVKkSoDk8Jie1IJGpya1OTJyQ/6SpD/AKQF3w3YLS0OSzfDdmrSUNgtsGGX0SRgoK52d7FHHZA3Pyu+qqpZfiX7lnXvDXOB+UnPp6rRcS/cszX3csa6MboRTq6RIMhwIkbFQadT/uhqLqzS8gSwZcHYb9+qKovY86mb/uadwsbjp0Y5+Q2hbgEEAAneCR/hW9rRDS2WSMGHSRKAttR2+yurWpJaCOi587Xbhelgxvha0AewGI9k51BuHQJS0SN5SurNJ00xJ2Lv2hYWL2fSZtH/AIVWfqhjhY2gyP8AkEmP+kq5osgAk5UfFre2uLNouNXZNqM1FhhzS86AROOa14/9RhyXp50Q4T+U1WXGuGV+EX1S1qO1tLW1aFSIFSm/Yx1Gx9lWFd1mnNjd9nDdPlRSnAkqapIE8FRBPEwkHFIlSFAOCWEwFydDk9Hsuye2VECZRDQFUibkVqcTC4gASoXvU2HvppeEEQ36LV0PlHssfwZ3y+wWwtz4R7Lqw+ODk7qZ3ylUfExLHfX/AArt0wVUcQHgd7Ksu4njurtldOT7rkR2ZzjmVy5Lg9KZ9ALqjpBVW/dXd+RlUbjLiry+uSQgTgmhOCkypZSLkjLKcITE9okgJwJmCU8scAiKNKQ1Fd2LhCuYs7dKvST1T+zd06KzbZRyTxbRyT8S8kvDmkASFo6GwVNa09MK6ojZXjNM6I5IO5Bh31RsYQ1dsgj3VX4UZPijTDlmalN7nEAE9AtpfUQ4On6KopWbTVaXDAdP1WM+tZdM7xRjrQcPtgIFTW+oYHicAJ2UNIOBaQSCNiCrv9VWhp/CawZgmvTJjmQ1yrLanqIwo5eq6OKbg22uqzCGvaHbcy0/dXNtXc6CKX/2d/pAU7X5XQrCi0sgR9lyZV147i1oE1R/Ud9G4b9kdTa2cAfRVVJ5aQFZUXYBPTksNba0a2PSEyk08QvKdi0TSoPp3F87cNDTrp0ieriAT6BRURdXtV1tY6dTDFe5cJo289ORf0H3Wk4fYW3DqAo0NRLnOqVqj81K1R2XPeepXX+Pw3K+V+OPn5ZjPGfVV+quDt4nw51Sm0d7sg6tRIGX04l9P67j29V5U6k4dcL3ZeefqXggtLh9xRZFrcuLmwMU6hElv+l3cmP9cnFya6rFhiXTCIezSYTIXO7JTAngBIlB9EtAulcGS4BLKlt26njCchW6PpUCSMKZ1vg4R9tQBdsinWwjZbY4uXPkUHdjun9nACtalCBsEPVphrSquOixz39Vdd+nZCOqEj1Ut47OEEJJUXFeXJqaavghkM9gtpb/ACj2WM4IIDPotnb/ACtWuLmt7TnYqtumhzSPRWZ2QNwJB+qeQx+s86nDiI5rkaaUkrlm32zN87LlUHcq2vBklVTtyoyiiJQkhOGygOylSJYQHIm3plzgUO0Eke6tbSlOnGVWMK0fa0gYwFaMt26duQUNtS2VkxuwW8YWhxQHRMfRAGyP0gCUJXcACilEdEQR7qzo8lVUXSVaUXARJCU7FFclFUAKV1ZoGI6STAQ9dz9DnufDYMBmPycq/G2EAvOzZqDi0OjDZyfoq+iwF7SebvslpjtO1fyLiGzuQOZJRFJhbLiNtlOOOqq0/jfDm8Q4NXcwE1bUtumbyQwEOAHtP2WMt6WjPtC9Js6wbpY8S2o0gtIlsRsVmeL8IbZVO3todZV3k0yN6Tjns3/x/wBlj+Thb+0dX42c/wA1BQaHNbhSPlsFR2jwCAMuIgNAJJPoBlWFLg/F7+s2mWd2pOGs1K0Tp/tpzM+8LimFy+R25Z44TugO8MDmCSXEhrWtEucTyAGVobHg3Er3szdl9pakSabT/wAiqOhP7R+VccN4Hw7hgD6VM1Lgjx3Fch9U4yGnYfRWrZIB5kTBXXx/jSd5OHk/Kt6wMtra2taNO3t6bKdJg8LGiB6k+p5lTJOS71XZ86jjvfZVBd0be5t6lCu3VTqCHDY77g9VPIQ108CnIOZCYYji36RvaZfW4ce80su7IlrazR0BPhP4WSq06tF7qdWm+nUacsqNLHD6OyvZKTtTW5Mx9kNeWtheM7K9tqNZpJjW0Fw9WkZH3WWXFv43x5rOq8gSBbm//Rdu/VU4ZcOpPyRQuSX0z6NqDxD6ysjfcN4jw54p3lu+kT8riJpu/wCl48KwywuP104cmOXyhgjLQAuH1QUFWFkMhLE813aNRrm4CgtW4RTgunF5+f0LUYMYCr7oeE+6tKqrLvYoqsYzt0PEhmNyibo+I/ZQM5fVRRk1XBRhn0Wwt/lCx/BtmfRbC32CuIEHZBV4H2Rp2KDrIy+Kw+gtO/uuUoaFyx220xd6CNSqTuVe39PJVI4Q4oyPE1OGyRKoU5LCQc09rdRACQTW1LU6YV7bUcDCCtKOG+yvLakcLbGMsqJos0gfRFsCjY3kpwIBVs6a8wIQFUB5Ak51bf2jUSSn1Lljrnu45NyeWvy/RTXFJrKFeoAIpW9QaeUvEAhVJsnUbaiaVGowAB7GvBMkwVI8OMU2/M7pyHqiabCy3tKbANQpU2jmPlAKdoFJrjE1DuZ3PRaag2ip0WNa3VB0/wDmVBeub2NSQcjQxo5uOBCLjwifeeiGrM7W5s6Iy1pdXeBGYwJJTCtNDu5FA/MKVOqR6vHJPZPixOMD/wDU/iY7K6pVpw8Cm+cjHRI0OcXaQCSBpHr6qdBMHhp7R0ilTbDiI8Tz8rB6lc6qyvSrUK7ZoV2tZUps8Ia0GQWHYOHI/wC025pOLqNCDoa2cbazuf4QThXovALCQJzyjoQnf/qseu4sf0/Yus7nibajQ9pFs60uNAh9M6wQCdnA4cFcVe1ntmTrpE8okDcZVZwy+DC9rtiRqYevItV0KgqUtTYIIO3L0ylhjMZqDPK5XdTW1zTuW+E5Bhw5z6IhZk95taz61KBS1y/TEPJ/lXNpfUrlrMgPOCNs9IKLEDZ2SExlcSAJ3jCHLnOcTyG0Db2CIExcMdEFcuL3U6eMul0IlzgBOPXfZAzqrvfmGMxHP2TkCW3qf8ioycNaAml/a16nSn4fvzQlrVd3mueeqOR5Sn13xRqdkYe8nU735J6Am2qCvWqVAf6DCKLDOKjxkwiKtKhcMqUq1OnVpGQ9lVocw+4OENQYKNCypN1ANALgZySZkhE6gXVBB0thznbzOdI9eqVHxkuLfo6i4PrcJOioBqNq9xNN3pSedj74WbtKb6b3MexzXsJa9rgQ5rhuCCvVmkRMYO0fys9+oeHUnNbxGk0Nqs0suNMDWwmGvPqNiscsP7G+PLflVNsPCEQQorceEIggpxjl9DVAqu7xPsraoMn2VVebORWmDNXR8TvdRM5KW5y76qJu6ilk1HBj8v0Wxt9gsZwU/Ktnb/KFcZiDsg63NGHZAXD4lLP4vD6Y0iPquUTH4+pXLj83X4qO/ty4O/0qF9q/UcfhbqtbB04QRsGE/KuizbnlZDurxy/C7u9ToVrfhzPKu+HN8oS8T8mQNCp0P2RFrbkukjM9FpHcNZ5U6nYtadkTEeQO3pBsYOfRW9FoAGMrqdsBGNkQKcALWM6VkJlzXbb0X1N3fLTb5nnYKZrI5Kqu3mvdmk0+C3kSNjUO/wBtk0nW1EloLhL3EuLj5jklWDna7W6pOB1saAZGCHOAChpDSWTEc1Lcjs32Mav69xToO0gkFpl0kj2WsgWoY1gEQC1gwNlC4ADeZzkoyrpFOcgbc+ar3P6zggYEndUR+mGgkn3PTooLcB1S5rkYLtDPVrBEqW5IZTEfMRobv+70SOa2jSpswDAB9ScoAS5pC4DmEZc0+oDlBwtrjq7UeKh4CIIBcPVGwA7UTGBucJwAGp3y4zJgR16IPaK6BinU5tcA4txviVLUt6dansJLRHT6wkrNBo1S6fkdzx1nopbUzRY482NBO+wQFXSpFgqlwl1Jwa4ATOrAdjOFY2Lg0VmlzvGQW53cOeVGGTXqkHB0sxuFOGUhVYwBrckNB5zkwkWz6mgiCDlpGOh3xspbG0pMc2pEkZbE4whi5jXQSBgtaNhDRsEfw5znMqOIOkuJafxEIoF1DAj7qBsifcxG8eq6o6Xbnw/lR6p58+R6IgOe6ASfpvlDAFtN7jEvOOo+qe8ipDZwHZg9PZNuCzSROGZdpOWgCdwmAdiR2ty7rVe0QOghSMae1LNMsdULsDaRMlJw9sUNZBmoXPP1JKKoNmoXERJxmcTgoFS1oFQHJLAA0TgkwACpGjZmXNZJqu5GocndRP8AFcANOaZ1TJ8LiIBIHTknktLhQZqApw6qTsZzg/5QE4cTBxH/AJGE24pMuKFxRcMVaTmT6nY/RI05MERPhgbD1Ugn33UUMnTpPZLSMtJa73BhPIM7FWd3RDbio4DFQh/1O6H7POxUaCvqNPiwVTXrH6XQDzWmdRQla0D5EJaXMtMBcUqxf8p36KFjKsmWlbZ/DGuPypnwlnlH2S8St2B4I14iQeS2lv8AKFVWNk2lEDorqk3SNlUiTyMfRVd0HThW0IWpSDjsllNxWN1VXTZU0nHMrlaNoCNly5vS6PbD3MEn3Teyb0CkJEn3Sal0MIZ2Q9F3ZN6JdQS6wjoIzSb0SdiOikLwu1o6BnZruz9Cna12tG4EFzUbbW9xXP8A8dMkA83HDQqSyY4gucZc8lzttyiuN3EiytA6O1qds+DyaYaD9ZSW4a0gHSHHE9Y9FWPYGMZ4dI8sAnP3T3Boq8PYSS03QdT6tLGOMH0TqbS3EHJJyZGfVMqEtuOGgkH+tcOwIgCnAn7rVK4qOcaeYBjkZVS98PGCJdmY6+isnOJaSYiMdZ/0qmsSKvKJnMzKaYPDDVfRcQAGiYBn2Tqo1PMiOgPpzXW0xTMjTp2jMzvKWrPaYGIMydj0CDRtYDMg7n5hkxzShgOrGx0mQnicADB3zEJSSIwSZj2HVADXECnUH9pke4wn8Oh9DS5sadtlHev00nmOXKOfupKH/HbZYEVARUO0SMQEj/h5ojtHOjYggyRBHskhphwgkHcQcj1RjoB0kHJIECRgTkoZ+ljmtiNToAaMTvOEJBXdRocGNjxuIMem4VzaNDLduP2ys9ev/wDULKmAYe5+R16n0WkZLaA1RIaflB2+vNJVDOc0OABAkkgDoN0yQ2ABEkxAMTvmNk0umIkTBg4Oeq4EkAwWzuDEj35KiPZGqSCZPIbTmShb5/gc0b1YpjTv4jBMeyLYCGEkAEziZHplACa1y0EQ1jjvEH1x1SEFsY5lKkGxj5vaIwiKTT4YgeJsyCZHMCE2C1rQXaiJzAE5nkpKIdzJMkkYjHIYTJA55pGq9jNdao4lrRALiMCSYwup5aWscRM9pVx4nHmOSGe8Pe4A+AYc4fvI/aD06qamXEjPgDRDYG87ygxbTiJI5YifcKUbb9EMCBDiTgEAA7zHJTsElrzuAQ0A7A/hTYEN2ydDuhLT9coTSEfXE0n9QNQ9FXalFBdISGmCl1LtQQEZoj0S9iMbJ+pO1bIBGU2hSgAJgKeDKAdCTSE7KUbIBWtELko/lcjQAk5PumOdCUjfKieMHKzrSQhqZSdooCM7ro9VntekxqeqTtfVQkeqSPVGz0n7X1S9p/mENHqUyu5zKNw9py2lUI99MJbHiqbx7ri8uKzDqDKbDR6FtI8vfKuG9m5lCvjs6tNrw7AiRnJVVaNa634e+IMPpn1AJCtrJofaVqbsijXe1k9DldOEY0XT1NiZe0AgZyAenJC3ZcLnhukjTFzJ6fJsEW1s0wJOYaCNxOMIC/Jbc8PAJg07gkdSNAlaEt+010xpME8yJj6IK8aJbBgmJI5c1NbtIYDrcdUOzGJgQFDVbqdlxMnY7CMYTSOoGabACQY333T6u/Ux+YUNu0AAifEZOSdhGJU1Rhku1GCBjECJ+qDI0kNbqMugTAIH0St1R4omJMTH5XaDAOoxkaYG+8zuuDTIg+HSZEbnHNACXckNaRBc8DBnE7qW6Dm29OS0uYAQWyB6bplds3dqycHWTjygEQpr4eFtPrRe+emmICR/wRSeX0GVHQC5suEyJjaVAKraj4AM4MH/AAktPHata4mHBxPvhLTphjxkkmRJ3gQYCaVNr7xx2m0B4bbtdIfAOqcmPqtS8kU+UaRGefsslwppqcV4kS4ghxDSIlpc85EiOS1Vc6Leq/fTTcQD/aJUxVAOeTUI5dZzM7QnDUXtGNMHVO88o9N0OJc7eCWgg7wSPVE02+PczgSI54lUR9d5ZTxAGZmZiOUYUFjTJd2ji7c4B8J23T7ppawNLiYIaSYBJ64wiLSk1lJoBJ0iJJkmOqCLUyWwSIMmIyIODKlBhjiDENcTOfCAZUTWwY1OOSZcZOTO5Ur2aaNfxEzTqOExjw4AhAU2oEMDcDSNIIP5G6JpOcNAMF8ZDdp54PJBiT2Yn5nNE8xJCOYBTBDepBPM+pQaekGtIa5xc8Au8RLiAT1KIDgfDiSDj02UFMbZPVEMA/H8pA4iWlvVpbH0VIXkEg8iR9le6ACTJ5FUV20NuK4HnP5yssujk2TtPVd2nqoY9U2PUrPa/ER2nqndptlDR6pc4ynseIpr5O6JYZhAUxndG0xsqlRZpOlCQBLCtJw/lcuAXIN//9k=",
      subject: "Mathematics",
      lastMessage: "Apr 3, 2023"
    },
    {
      id: 2,
      name: "Mr. Rohan Patil",
      avatar: "https://img.freepik.com/premium-photo/indian-male-teacher_981168-3017.jpg?semt=ais_hybrid",
      subject: "English Literature",
      lastMessage: "Mar 28, 2023"
    },
    {
      id: 3,
      name: "Ms. Neha Iyer",
      avatar: "https://media.istockphoto.com/photos/portrait-of-an-indian-lady-teacher-picture-id678420912?k=20&m=678420912&s=612x612&w=0&h=EOKQkNMN0pU43WMUuL10p0s6qbBKuXTrs-LwtcUx4Cw=",
      subject: "Science",
      lastMessage: "None"
    }
  ];
  
  const courses = [
    { id: 1, name: "Algebra II", teacher: "Dr. Vandana Sharma" },
    { id: 2, name: "English Literature", teacher: "Mr. Sanjay Kulkarni" },
    { id: 3, name: "Physics", teacher: "Dr. Neeraj Kohli" },
    { id: 4, name: "Chemistry", teacher: "Ms. Priya Nair" },
    { id: 5, name: "World History", teacher: "Mr. Ajay Verma" }
  ];
  
  const handleSendFeedback = () => {
    if (!feedbackMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message before sending.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feedback Sent",
      description: "Your message has been sent to the teacher."
    });
    
    setFeedbackMessage("");
  };
  
  const handleRateCourse = (courseId: number, rating: number) => {
    toast({
      title: "Thank You!",
      description: `You rated this course ${rating} stars.`
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
          <p className="text-muted-foreground">
            View feedback from teachers and provide your own input
          </p>
        </div>
        
        <Tabs defaultValue="received">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="received">Received Feedback</TabsTrigger>
            <TabsTrigger value="send">Send Feedback</TabsTrigger>
            <TabsTrigger value="rate">Rate Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="received" className="mt-6 space-y-4">
            {recentFeedback.map((feedback) => (
              <Card key={feedback.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={feedback.teacher.avatar} alt={feedback.teacher.name} />
                      <AvatarFallback>{feedback.teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{feedback.teacher.name}</CardTitle>
                      <CardDescription>
                        {feedback.teacher.subject} • {feedback.assignment}
                      </CardDescription>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{feedback.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{feedback.message}</p>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="send" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Send Feedback to Teachers</CardTitle>
                <CardDescription>
                  Select a teacher and write your message
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="teacher-select" className="text-sm font-medium">Select Teacher</label>
                  <select 
                    id="teacher-select"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Choose a teacher...</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name} ({teacher.subject})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="feedback-type" className="text-sm font-medium">Feedback Type</label>
                  <select 
                    id="feedback-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="question">Question</option>
                    <option value="comment">Comment</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="concern">Concern</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="feedback-message" className="text-sm font-medium">Your Message</label>
                  <Textarea 
                    id="feedback-message" 
                    placeholder="Write your message here..." 
                    rows={5}
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">
                  Your message will be sent privately to the selected teacher.
                </div>
                <Button onClick={handleSendFeedback}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6">
              <h3 className="mb-4 font-medium">Recent Conversations</h3>
              {teachers.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="flex items-center justify-between rounded-lg border p-4 mb-2 hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={teacher.avatar} alt={teacher.name} />
                      <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {teacher.lastMessage !== "None" ? (
                      <>Last message: {teacher.lastMessage}</>
                    ) : (
                      <>No messages yet</>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rate" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Your Courses</CardTitle>
                <CardDescription>
                  Your feedback helps improve the learning experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">Teacher: {course.teacher}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => handleRateCourse(course.id, rating)}
                            className="rounded-full p-1 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            <Star className="h-5 w-5 text-muted-foreground hover:text-orange-500" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Your ratings are anonymous and help teachers improve their courses.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentFeedback;
