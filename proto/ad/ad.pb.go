// Code generated by protoc-gen-go.
// source: ad/ad.proto
// DO NOT EDIT!

/*
Package ad is a generated protocol buffer package.

It is generated from these files:
	ad/ad.proto

It has these top-level messages:
	Ad
	HomeBannerAds
*/
package ad

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

// Ad 广告
type Ad struct {
	PID       uint32 `protobuf:"varint,1,opt,name=PID" json:"PID,omitempty"`
	MediaType uint32 `protobuf:"varint,2,opt,name=MediaType" json:"MediaType,omitempty"`
	AdName    string `protobuf:"bytes,3,opt,name=AdName" json:"AdName,omitempty"`
	AdLink    string `protobuf:"bytes,4,opt,name=AdLink" json:"AdLink,omitempty"`
	AdCode    string `protobuf:"bytes,5,opt,name=AdCode" json:"AdCode,omitempty"`
}

func (m *Ad) Reset()                    { *m = Ad{} }
func (m *Ad) String() string            { return proto.CompactTextString(m) }
func (*Ad) ProtoMessage()               {}
func (*Ad) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

// HomeBannerAds 首页轮播广告
type HomeBannerAds struct {
	Ads []*Ad `protobuf:"bytes,1,rep,name=ads" json:"ads,omitempty"`
}

func (m *HomeBannerAds) Reset()                    { *m = HomeBannerAds{} }
func (m *HomeBannerAds) String() string            { return proto.CompactTextString(m) }
func (*HomeBannerAds) ProtoMessage()               {}
func (*HomeBannerAds) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *HomeBannerAds) GetAds() []*Ad {
	if m != nil {
		return m.Ads
	}
	return nil
}

func init() {
	proto.RegisterType((*Ad)(nil), "ad.Ad")
	proto.RegisterType((*HomeBannerAds)(nil), "ad.HomeBannerAds")
}

func init() { proto.RegisterFile("ad/ad.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 169 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xe2, 0xe2, 0x4e, 0x4c, 0xd1, 0x4f,
	0x4c, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x4a, 0x4c, 0x51, 0xaa, 0xe1, 0x62, 0x72,
	0x4c, 0x11, 0x12, 0xe0, 0x62, 0x0e, 0xf0, 0x74, 0x91, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0d, 0x02,
	0x31, 0x85, 0x64, 0xb8, 0x38, 0x7d, 0x53, 0x53, 0x32, 0x13, 0x43, 0x2a, 0x0b, 0x52, 0x25, 0x98,
	0xc0, 0xe2, 0x08, 0x01, 0x21, 0x31, 0x2e, 0x36, 0xc7, 0x14, 0xbf, 0xc4, 0xdc, 0x54, 0x09, 0x66,
	0x05, 0x46, 0x0d, 0xce, 0x20, 0x28, 0x0f, 0x22, 0xee, 0x93, 0x99, 0x97, 0x2d, 0xc1, 0x02, 0x13,
	0x07, 0xf1, 0x20, 0xe2, 0xce, 0xf9, 0x29, 0xa9, 0x12, 0xac, 0x30, 0x71, 0x10, 0x4f, 0x49, 0x93,
	0x8b, 0xd7, 0x23, 0x3f, 0x37, 0xd5, 0x29, 0x31, 0x2f, 0x2f, 0xb5, 0xc8, 0x31, 0xa5, 0x58, 0x48,
	0x82, 0x8b, 0x39, 0x31, 0xa5, 0x58, 0x82, 0x51, 0x81, 0x59, 0x83, 0xdb, 0x88, 0x4d, 0x2f, 0x31,
	0x45, 0xcf, 0x31, 0x25, 0x08, 0x24, 0x94, 0xc4, 0x06, 0x76, 0xb3, 0x31, 0x20, 0x00, 0x00, 0xff,
	0xff, 0x28, 0xa2, 0x22, 0x4f, 0xc2, 0x00, 0x00, 0x00,
}
