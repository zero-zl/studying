   >    1. Editor（编辑器的使用）https://www.runoob.com/linux/linux-vim.html
   >    2. Shell Script（shell 的使用,bash 编辑器等）
   >    3. User and Group(useradd,userdel,usermod,groupadd,groupdel,groupmod)
   >    4. Package management(apt,snap,yum,)
   >   5. Hardware and System Architecture(硬件和系统架构)
   >   6. Block device and file system（块设备和文件系统）
   >   7. System service（系统服务，systemctl (status,star,stop，enable)）

# 一）常用：

  *  ls: 列出目录
  *  cd：切换目录
  *  pwd：显示目前的目录
  *  mkdir：创建一个新的目录
  *  rmdir：删除一个空的目录
  *  cp: 复制文件或目录
  *  rm: 移除文件或目录
  *  mv: 移动文件与目录，或修改文件与目录的名称
  *  echo:输出
  *  history:查看历史命令
  *  cat ：输出文件内容

# 二）用户和组的管理
## USER:
| add    | useradd  | [option] | <username> |
| del    | userdel  | [option] | <username> |
| mod    | usermod  | [option] | <suername> |
 ### passwd:   

### search
* /etc/passwd（所有用户）
* /etc/shadow(密码)
* groups  <username>(产看user所属组)

### cd(切换用户)
su <username>

## GROUP:
add
del
mod
search
/etc/group（所有用户组）

# 三）块设备和文件系统
3.1）df
检查文件系统的磁盘空间占用情况。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。

df [-ahikHTm] [目录或文件名]

    -a ：列出所有的文件系统，包括系统特有的 /proc 等文件系统；
    -k ：以 KBytes 的容量显示各文件系统；
    -m ：以 MBytes 的容量显示各文件系统；
    -h ：以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；
    -H ：以 M=1000K 取代 M=1024K 的进位方式；
    -T ：显示文件系统类型, 连同该 partition 的 filesystem 名称 (例如 ext3) 也列出；
    -i ：不用硬盘容量，而以 inode 的数量来显示


3.2）du
对文件和目录磁盘使用的空间的查看

du [-ahskm] 文件或目录名称

    -a ：列出所有的文件与目录容量，因为默认仅统计目录底下的文件量而已。
    -h ：以人们较易读的容量格式 (G/M) 显示；
    -s ：列出总量而已，而不列出每个各别的目录占用容量；
    -S ：不包括子目录下的总计，与 -s 有点差别。
    -k ：以 KBytes 列出容量显示；
    -m ：以 MBytes 列出容量显示；


3.3）fdisk
Linux 的磁盘分区表操作工具

fdisk [-l] 装置名称

选项与参数：

    -l ：输出后面接的装置所有的分区内容。若仅有 fdisk -l 时， 则系统将会把整个系统内能够搜寻到的装置的分区均列出来。

3.4)mount

查看所有磁挂载情况

3.5)udiskctl mount --block-device /dev/scd1
查看挂载磁盘分区
3.6)sudo udisksctl unmount --block-device /dev/sdc1
卸载磁盘分区
3.7) sudo gparted /dev/sdc 
图形化界面磁盘管理

# 四）System service（系统服务，systemctl (status,star,stop，enable)）

