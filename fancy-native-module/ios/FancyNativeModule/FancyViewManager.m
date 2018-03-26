//
//  FancyViewManager.m
//  FancyNativeModule
//
//  Created by Gabor Wnuk on 26/03/2018.
//  Copyright © 2018 Gabor Wnuk. All rights reserved.
//

#import "FancyViewManager.h"
#import <React/UIView+React.h>

@interface FancyViewManager ()

@end

@implementation FancyViewManager

/*
 We could either remove "FancyViewManagerManager" here and rename Android module,
 or use "ManagerManager" suffix here as a hack to achieve compatibility between platforms.
 */
RCT_EXPORT_MODULE(FancyViewManagerManager)

- (UIView *)view
{
    return [[UIView alloc] init];
}

@end
