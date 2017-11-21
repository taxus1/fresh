// Code generated by protoc-gen-go.
// source: region/region.proto
// DO NOT EDIT!

/*
Package region is a generated protocol buffer package.

It is generated from these files:
	region/region.proto

It has these top-level messages:
	Region
	Children
*/
package region

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Region struct {
	ID       uint32 `protobuf:"varint,1,opt,name=ID" json:"ID,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Level    uint32 `protobuf:"varint,3,opt,name=level" json:"level,omitempty"`
	ParentID uint32 `protobuf:"varint,4,opt,name=parentID" json:"parentID,omitempty"`
}

func (m *Region) Reset()                    { *m = Region{} }
func (m *Region) String() string            { return proto.CompactTextString(m) }
func (*Region) ProtoMessage()               {}
func (*Region) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type Children struct {
	Regions []*Region `protobuf:"bytes,1,rep,name=regions" json:"regions,omitempty"`
}

func (m *Children) Reset()                    { *m = Children{} }
func (m *Children) String() string            { return proto.CompactTextString(m) }
func (*Children) ProtoMessage()               {}
func (*Children) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *Children) GetRegions() []*Region {
	if m != nil {
		return m.Regions
	}
	return nil
}

func init() {
	proto.RegisterType((*Region)(nil), "region.Region")
	proto.RegisterType((*Children)(nil), "region.Children")
}

func init() { proto.RegisterFile("region/region.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 157 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xe2, 0x12, 0x2e, 0x4a, 0x4d, 0xcf,
	0xcc, 0xcf, 0xd3, 0x87, 0x50, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0x6c, 0x10, 0x9e, 0x52,
	0x1c, 0x17, 0x5b, 0x10, 0x98, 0x25, 0xc4, 0xc7, 0xc5, 0xe4, 0xe9, 0x22, 0xc1, 0xa8, 0xc0, 0xa8,
	0xc1, 0x1b, 0xc4, 0xe4, 0xe9, 0x22, 0x24, 0xc4, 0xc5, 0x92, 0x97, 0x98, 0x9b, 0x2a, 0xc1, 0xa4,
	0xc0, 0xa8, 0xc1, 0x19, 0x04, 0x66, 0x0b, 0x89, 0x70, 0xb1, 0xe6, 0xa4, 0x96, 0xa5, 0xe6, 0x48,
	0x30, 0x83, 0x95, 0x41, 0x38, 0x42, 0x52, 0x5c, 0x1c, 0x05, 0x89, 0x45, 0xa9, 0x79, 0x25, 0x9e,
	0x2e, 0x12, 0x2c, 0x60, 0x09, 0x38, 0x5f, 0xc9, 0x84, 0x8b, 0xc3, 0x39, 0x23, 0x33, 0x27, 0xa5,
	0x28, 0x35, 0x4f, 0x48, 0x83, 0x8b, 0x1d, 0x62, 0x6b, 0xb1, 0x04, 0xa3, 0x02, 0xb3, 0x06, 0xb7,
	0x11, 0x9f, 0x1e, 0xd4, 0x4d, 0x10, 0x27, 0x04, 0xc1, 0xa4, 0x93, 0xd8, 0xc0, 0x8e, 0x34, 0x06,
	0x04, 0x00, 0x00, 0xff, 0xff, 0xe0, 0x31, 0x94, 0x92, 0xbb, 0x00, 0x00, 0x00,
}